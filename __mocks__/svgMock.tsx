import React from "react";

export default function SvgMock(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} data-testid="mock-svg" />;
}
