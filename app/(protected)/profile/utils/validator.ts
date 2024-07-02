import * as yup from "yup";

export const yupExample = yup.object().shape({
  content: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
  location: yup.string().required("Vui lòng chọn Vị trí phòng họp").default(""),
  gender: yup.string().required("Vui lòng chọn Vị trí phòng họp").default(""),
});

export const skillValidator = yup.object().shape({
  percent: yup.number().required("Vui lòng nhập Nội dung cuộc họp").default(70),
  title: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
});

export const socialValidator = yup.object().shape({
  percent: yup.number().required("Vui lòng nhập Nội dung cuộc họp").default(70),
  title: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
});
