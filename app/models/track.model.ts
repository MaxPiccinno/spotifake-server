import mongoose from "mongoose";

export interface ITrack {
  title: string;
  artistId: string;
  duration: number;
  fileName: string;
  comments: string[];
}

const trackSchema = new mongoose.Schema<ITrack>({
  title: { type: String, required: true },
  artistId: { type: String, required: true },
  duration: { type: Number, required: true },
  fileName: { type: String, required: true },
  comments: [String],
});

const Track = mongoose.model<ITrack>("Track", trackSchema);
export default Track;
