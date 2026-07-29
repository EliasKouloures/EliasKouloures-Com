import { markdownResponse, workMarkdown } from "../markdown-content";

export function GET() {
  return markdownResponse(workMarkdown("de"));
}
