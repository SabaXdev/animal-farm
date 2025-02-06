export interface Pig {
  pigId: string;
  name: string;
  currentStatus: 'neutral' | 'happy' | 'putin';
  imageUrl: string;
  updatedAt: Date;
}
