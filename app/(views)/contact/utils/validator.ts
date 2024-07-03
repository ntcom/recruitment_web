import * as yup from "yup";

export const contactValidator = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập Họ và tên").default(""),
    subject: yup.string().required("Vui lòng nhập Email").default(""),
    email: yup.string().required("Vui lòng nhập Email").default(""),
    phone: yup.string().required("Vui lòng nhập Số điện thoại").default(""),
    description: yup.string().default(""),
  });
  