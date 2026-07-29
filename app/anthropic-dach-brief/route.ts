import { preservedAnthropicReport } from "../preserved-anthropic-report";

export function GET() {
  return preservedAnthropicReport("brief");
}
