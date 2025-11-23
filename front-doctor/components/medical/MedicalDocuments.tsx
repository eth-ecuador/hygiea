'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useFilecoin } from '@/hooks/useFilecoin';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileUp, Download, Lock, CheckCircle2, XCircle, Loader2, FileText } from 'lucide-react';

const DOCUMENT_TYPES = [
  'Lab Result',
  'Imaging (X-Ray, MRI, CT)',
  'Prescription',
  'Medical Report',
  'Vaccination Record',
  'Surgical Report',
  'Other',
];

export default function MedicalDocuments() {
  const { address } = useAccount();

  // Upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [patientAddress, setPatientAddress] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  // Download state
  const [downloadCID, setDownloadCID] = useState('');
  const [downloadPassword, setDownloadPassword] = useState('');
  const [downloadFilename, setDownloadFilename] = useState('medical-document.pdf');

  // Use Filecoin hook
  const {
    uploadMedicalDocument,
    downloadMedicalDocument,
    uploadProgress,
    isUploading,
    isUploadConfirmed,
    isDownloading,
    documents,
    totalDocuments,
    refetchDocuments,
    error,
    clearError,
  } = useFilecoin();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Handle upload
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !patientAddress || !documentType || !description || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const result = await uploadMedicalDocument({
        file: selectedFile,
        patientAddress,
        documentType,
        description,
        password,
      });

      alert(`Document uploaded successfully!\nCID: ${result.cid}`);

      // Reset form
      setSelectedFile(null);
      setPatientAddress('');
      setDocumentType('');
      setDescription('');
      setPassword('');

      // Refetch documents
      refetchDocuments();
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  // Handle download
  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!downloadCID || !downloadPassword) {
      alert('Please enter CID and password');
      return;
    }

    try {
      await downloadMedicalDocument({
        cid: downloadCID,
        password: downloadPassword,
        filename: downloadFilename,
        mimeType: 'application/octet-stream',
      });

      alert('Document downloaded successfully!');

      // Reset form
      setDownloadCID('');
      setDownloadPassword('');
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Medical Documents (Filecoin)
          </CardTitle>
          <CardDescription>
            Upload and manage encrypted medical documents stored on Filecoin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload Document</TabsTrigger>
              <TabsTrigger value="download">Download Document</TabsTrigger>
              <TabsTrigger value="list">My Documents</TabsTrigger>
            </TabsList>

            {/* Upload Tab */}
            <TabsContent value="upload" className="space-y-4">
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file">Select Medical Document</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.dcm"
                    required
                  />
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patient">Patient Address</Label>
                  <Input
                    id="patient"
                    type="text"
                    placeholder="0x..."
                    value={patientAddress}
                    onChange={(e) => setPatientAddress(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    The patient must have authorized you as their doctor
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="docType">Document Type</Label>
                  <Select value={documentType} onValueChange={setDocumentType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      {DOCUMENT_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the document..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Encryption Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Strong password for encryption"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    <Lock className="inline h-3 w-3 mr-1" />
                    This password will be needed to decrypt the document later. Keep it safe!
                  </p>
                </div>

                {uploadProgress && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{uploadProgress.message}</span>
                      <span>{uploadProgress.percentage}%</span>
                    </div>
                    <Progress value={uploadProgress.percentage} />
                  </div>
                )}

                {error && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {isUploadConfirmed && (
                  <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>
                      Document uploaded and registered on blockchain!
                    </AlertDescription>
                  </Alert>
                )}

                <Button type="submit" disabled={isUploading} className="w-full">
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <FileUp className="mr-2 h-4 w-4" />
                      Upload Document
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Download Tab */}
            <TabsContent value="download" className="space-y-4">
              <form onSubmit={handleDownload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cid">Document CID (Content Identifier)</Label>
                  <Input
                    id="cid"
                    type="text"
                    placeholder="bafybei..."
                    value={downloadCID}
                    onChange={(e) => setDownloadCID(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    The CID from the upload or from the document list
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="downloadPassword">Decryption Password</Label>
                  <Input
                    id="downloadPassword"
                    type="password"
                    placeholder="Password used during encryption"
                    value={downloadPassword}
                    onChange={(e) => setDownloadPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="filename">Save As (optional)</Label>
                  <Input
                    id="filename"
                    type="text"
                    placeholder="document.pdf"
                    value={downloadFilename}
                    onChange={(e) => setDownloadFilename(e.target.value)}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" disabled={isDownloading} className="w-full">
                  {isDownloading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download & Decrypt
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Documents List Tab */}
            <TabsContent value="list" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Total Documents: {totalDocuments?.toString() || '0'}
                  </h3>
                  <Button onClick={() => refetchDocuments()} variant="outline" size="sm">
                    Refresh
                  </Button>
                </div>

                {documents && documents.length > 0 ? (
                  <div className="space-y-2">
                    {documents.map((doc, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold">{doc.documentType}</p>
                                <p className="text-sm text-muted-foreground">{doc.description}</p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setDownloadCID(doc.cid);
                                  // Switch to download tab
                                  const downloadTab = document.querySelector(
                                    '[data-value="download"]'
                                  ) as HTMLButtonElement;
                                  downloadTab?.click();
                                }}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-xs space-y-1 text-muted-foreground">
                              <p>CID: {doc.cid}</p>
                              <p>Doctor: {doc.doctorId}</p>
                              <p>
                                Date: {new Date(Number(doc.timestamp) * 1000).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Alert>
                    <AlertDescription>
                      No documents found. Upload your first document to get started.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Encrypted Storage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <Lock className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>
              All medical documents are encrypted with AES-256-GCM before being uploaded to
              Filecoin
            </span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>
              Document hashes are stored on Sapphire blockchain for integrity verification
            </span>
          </p>
          <p className="flex items-start gap-2">
            <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>Only authorized doctors can upload documents to patient records</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
