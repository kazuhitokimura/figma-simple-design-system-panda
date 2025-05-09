import { css } from "../../styled-system/css";
import { Card } from "./ui/card";

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
          paddingX: "1200",
          paddingY: "1600", // 96px 64px
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "768px",
            paddingX: "600",
            gap: "200", // 8px
          })}
        >
          <h1
            className={css({
              textStyle: "titleHero",
              color: "text.default",
              textAlign: "center",
            })}
          >
            Figma→Cursor Prototypes
          </h1>
          <span
            className={css({
              textStyle: "subtitle",
              color: "text.secondary",
              textAlign: "center",
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
          <h2
            className={css({
              textStyle: "heading",
              color: "text.default",
              width: "100%",
            })}
          >
            作ったプロトタイプの一覧
          </h2>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "600", // 48px
              alignSelf: "stretch",
            })}
          >
            {[...Array(5)].map((_, i) => (
              <Card
                key={i}
                title="Title"
                body="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
                buttonLabel="Button"
                buttonSize="medium"
                buttonVariant="neutral"
              />
            ))}
          </div>
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
            {`Figma CommunityからFigma Symple Design SystemをDublicate\nNext.js・PandaCSSの開発環境を構築\nFigma APIキーを環境変数に設定\nCursorからframelinkのMCP サーバー経由でデザインデータを取得\nPandaCSSにTokensを登録\nComponentを作成\nPageを作成\nGitHubに公開\nVercelでホスティング`}
          </div>
        </div>
      </section>
    </div>
  );
}
