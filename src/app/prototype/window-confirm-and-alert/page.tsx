"use client";
import { css } from "../../../../styled-system/css";

import { ButtonDanger } from "../../ui/buttonDanger";

export default function ComponentList() {
  return (
    <div className={css({ padding: "1200" })}>
      <ButtonDanger
        size="medium"
        variant="primary"
        onClick={() => {
          window.confirm("コンテンツを削除するけど大丈夫？");
        }}
      >
        window.confirm
      </ButtonDanger>
      <ButtonDanger
        size="medium"
        variant="primary"
        onClick={() => {
          window.alert("確認してもらっていいですか？");
        }}
      >
        window.alert
      </ButtonDanger>
    </div>
  );
}
