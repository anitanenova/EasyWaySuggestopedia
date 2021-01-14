declare global {
  interface String {
    addCloudinaryProps(...props): string;
  }
}

String.prototype.addCloudinaryProps = function (...props: Array<string>) {
  //с
  return `${this.replace("/upload/", `/upload/${props.join(",")}/`)}`;
};

export {};
