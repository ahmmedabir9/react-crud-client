import config from "../config/config";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const createFileUrl = (file) => {
  return file
    ? `${config.awsS3}${file}`
    : "https://future-talk-s3.s3.amazonaws.com/b2288d20-bca9-4e8c-9c41-da45118a7230.jpg";
};
