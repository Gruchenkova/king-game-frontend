interface PageInterface {
  render(): Promise<string>;
  after_render(): void;
}
export default PageInterface;
