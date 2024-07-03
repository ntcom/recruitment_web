import * as yup from "yup";

export const yupLogin = yup.object().shape({
  username: yup.string().required("Vui lòng nhập Tên đăng nhập").default(""),
  password: yup.string().required("Vui lòng nhập mật khẩu").default(""),
});
