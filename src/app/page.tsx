import { css } from "../../styled-system/css";
import { PrototypeCardList } from "./ui/top/prototypeCardList";

export default function Home() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        bg: "background.default",
      })}
    >
      {/* Hero Section */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: "1600", // 96px 64px
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "768px",
            paddingX: "200",
            gap: "200", // 8px
            tablet: {
              paddingX: "600",
            },
          })}
        >
          <h1
            className={css({
              textStyle: "subtitle",
              color: "text.default",
              textAlign: "center",
              tablet: {
                textStyle: "titleHero",
              },
              mobile: {
                textStyle: "titlePage",
              },
            })}
          >
            Figma→Cursor Prototypes
          </h1>
          <span
            className={css({
              textStyle: "subHeading",
              color: "text.secondary",
              textAlign: "center",
              tablet: {
                textStyle: "subtitle",
              },
              mobile: {
                textStyle: "subtitle",
              },
            })}
          >
            FigmaとCursorで作ったプロトタイプ集
          </span>
        </div>
      </section>

      {/* Card Grid Section */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1200", // 48px
          bg: "background.secondary",
          paddingY: "1200", // 48px
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "896px",
            paddingX: "600",
            gap: "800", // 48px
          })}
        >
          <PrototypeCardList />
        </div>
      </section>

      {/* Panel Section */}
      <section
        className={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          gap: "1200", // 48px
          paddingY: "1200",
          bg: "background.default",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "896px",
            paddingX: "600",
            gap: "800", // 24px
          })}
        >
          <h2 className={css({ textStyle: "heading", color: "text.default" })}>
            プロトタイプができるまでの流れ
          </h2>
          <div
            className={css({
              textStyle: "body.base",
              color: "text.default",
              whiteSpace: "pre-line",
            })}
          >
            {`Figma CommunityからFigma Symple Design SystemをDublicate\nNext.js・PandaCSSの開発環境を構築\nFigma APIキーを環境変数に設定\nCursorからframelinkのMCP サーバー経由でデザインデータを取得\nPandaCSSにTokensを登録\nComponentを作成\nPageを作成`}
          </div>
        </div>
      </section>
    </div>
  );
}
