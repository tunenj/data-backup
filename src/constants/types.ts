export type ExportStatus = 'Completed' | 'In Progress' | 'Failed';

export interface ExportRecord {
  id: string;
  user: string;
  dateTime: string;
  records: number;
  status: ExportStatus;
}

export interface ExportStats {
  totalExports: number;
  successRate: string;
  successCount: number;
  failedCount: number;
  lastExport: string;
}