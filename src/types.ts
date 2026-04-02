export interface Rake {
  id: string;
  number: string;
  status: 'Empty' | 'Loaded' | 'In Transit' | 'Maintenance';
  location: [number, number];
  station: string;
  type: string;
}

export interface CargoRequest {
  id: string;
  origin: string;
  destination: string;
  type: string;
  weight: number;
  wagonsRequired: number;
  priority: 'Normal' | 'High' | 'Critical';
  status: 'Pending' | 'Assigned' | 'In Transit' | 'Delivered';
  specialInstructions?: string;
}

export interface Recommendation {
  id: string;
  rakeId: string;
  cargoId: string;
  efficiency: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  route: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}
