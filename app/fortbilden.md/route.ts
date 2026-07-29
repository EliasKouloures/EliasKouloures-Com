import { markdownResponse, serviceMarkdown } from "../markdown-content";

export function GET() {
  return markdownResponse(serviceMarkdown("fortbilden"));
}
