import { markdownResponse, profileMarkdown } from "../markdown-content";

export function GET() {
  return markdownResponse(profileMarkdown("en"));
}
