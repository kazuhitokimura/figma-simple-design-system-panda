"use client";
import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { InputField } from "../inputField";
import { SelectField } from "../selectField";

export const FormElementList = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const [selectValue1, setSelectValue1] = useState("1");
  const [selectValue2, setSelectValue2] = useState("1");
  const [selectValue3, setSelectValue3] = useState("1");

  return (
    <div>
      <h2
        className={css({
          textStyle: "subheading",
          color: "text.default",
          paddingBottom: "300",
        })}
      >
        Input Field
      </h2>
      <div
        className={css({ display: "flex", flexDirection: "row", gap: "200" })}
      >
        <InputField
          label="ラベル"
          value={inputValue1}
          placeholder="プレースホルダー"
          state="default"
          onChange={(value) => setInputValue1(value)}
        />
        <InputField
          label="ラベル"
          value={inputValue2}
          placeholder="プレースホルダー"
          state="error"
          onChange={(value) => setInputValue2(value)}
        />
        <InputField
          label="ラベル"
          value={inputValue3}
          placeholder="プレースホルダー"
          state="disabled"
          onChange={(value) => setInputValue3(value)}
        />
      </div>
      <h2
        className={css({
          textStyle: "subheading",
          color: "text.default",
          paddingTop: "600",
          paddingBottom: "300",
        })}
      >
        Select Field
      </h2>
      <div
        className={css({ display: "flex", flexDirection: "row", gap: "200" })}
      >
        <SelectField
          label="ラベル"
          options={[
            { label: "", value: "1" },
            { label: "選択肢1", value: "2" },
            { label: "選択肢2", value: "3" },
          ]}
          state="default"
          onChange={(value) => setSelectValue1(value)}
          value={selectValue1}
        />
        <SelectField
          label="ラベル"
          options={[
            { label: "", value: "1" },
            { label: "選択肢1", value: "2" },
            { label: "選択肢2", value: "3" },
          ]}
          state="error"
          onChange={(value) => setSelectValue2(value)}
          value={selectValue2}
        />
        <SelectField
          label="ラベル"
          options={[
            { label: "", value: "1" },
            { label: "選択肢1", value: "2" },
            { label: "選択肢2", value: "3" },
          ]}
          state="disabled"
          onChange={(value) => setSelectValue3(value)}
          value={selectValue3}
        />
      </div>
    </div>
  );
};
