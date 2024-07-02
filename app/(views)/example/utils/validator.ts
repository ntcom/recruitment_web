import * as yup from "yup";

export const yupExample = yup.object().shape({
  content: yup.string().required("Vui lòng nhập Nội dung cuộc họp").default(""),
  location: yup.string().required("Vui lòng chọn Vị trí phòng họp").default(""),
  gender: yup.string().required("Vui lòng chọn Vị trí phòng họp").default(""),
});
