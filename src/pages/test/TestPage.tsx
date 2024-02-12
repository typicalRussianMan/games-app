import { FC, memo } from "react";

const TestPageComponent: FC = () => (
  <div>Test page!</div>
);

export const TestPage = memo(TestPageComponent);
