import { z } from "zod";

export const mimeTypeNameSchema = z.enum([
	"application/json",
	"application/octet-stream",
	"application/zip",
	"image/gif",
	"image/jpeg",
	"image/png",
	"text/css",
	"text/csv",
	"text/plain",
	"video/mp4",
	"video/msvideo",
	"video/x-ms-wmv",
] as const);

export type MimeTypeName = z.infer<typeof mimeTypeNameSchema>;

export const asMimeTypeName = (value: unknown): MimeTypeName =>
	mimeTypeNameSchema.parse(value);

export const isMimeTypeName = (obj: unknown): obj is MimeTypeName =>
	mimeTypeNameSchema.safeParse(obj).success;

export const ApplicationJson: MimeTypeName = "application/json";
export const ApplicationOctetStream: MimeTypeName = "application/octet-stream";
export const ApplicationZip: MimeTypeName = "application/zip";
export const ImageGif: MimeTypeName = "image/gif";
export const ImageJpeg: MimeTypeName = "image/jpeg";
export const ImagePng: MimeTypeName = "image/png";
export const TextCsv: MimeTypeName = "text/csv";
export const TextPlain: MimeTypeName = "text/plain";
export const VideoMp4: MimeTypeName = "video/mp4";
export const VideoMsVideo: MimeTypeName = "video/msvideo";
export const VideoWmv: MimeTypeName = "video/x-ms-wmv";
