export interface CallLog {
  id: string;
  callType: 'Inbound' | 'Outbound';
  phoneNumber: string;
  agentName: string;
  campaign: string;
  startTime: string;
  duration: string;
  hungUpBy: 'Agent' | 'Customer';
}
