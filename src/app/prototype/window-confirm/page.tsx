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
          window.confirm("コンテンツを削除しますけど大丈夫？");
        }}
      >
        ボタン
      </ButtonDanger>
    </div>
  );
}
