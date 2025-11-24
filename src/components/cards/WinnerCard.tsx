import React from "react";
import { cardStyles } from "@/styles/styles";
import PlayButton from "../button/PlayButton";
import plinkoImage from "../../assets/plinko.png";

interface WinnerCardProps {
  image?: string;
  position?: number | string;
  title: string;
  name?: string;
  amount: string;
  onPlay?: () => void;
  variant?: "withButton" | "compact";
}

const WinnerCard: React.FC<WinnerCardProps> = ({
  image = plinkoImage,
  position = "1°",
  title,
  name = "Nome do jogador",
  amount,
  onPlay,
  variant = "compact",
}) => {
  if (variant === "compact") {
    return (
      <div
        style={{
          display: "flex",
          borderRadius: 12,
          backgroundColor: cardStyles.card.background,
          border: `1px solid ${cardStyles.card.border}`,
          color: cardStyles.card.title,
          fontFamily: cardStyles.fonts.title,
        }}
      >
        <div style={{
          padding: '12px',
          borderRight: `1px solid ${cardStyles.card.border}`

        }}
        >

          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 8,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div style={{
          padding: '12px'
        }}>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: "bold",
                wordBreak: "break-word",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: cardStyles.card.title,
                wordBreak: "break-word",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: cardStyles.card.value,
                fontFamily: cardStyles.fonts.value,
              }}
            >
              {amount}
            </div>
          </div>
        </div>
      </div>

    );
  }

  // Layout padrão com botão
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: cardStyles.card.background,
        border: `1px solid ${cardStyles.card.border}`,
        display: "flex",
        flexDirection: "column",
        padding: 12,
        color: cardStyles.card.title,
        fontFamily: cardStyles.fonts.title,
      }}
    >
      {/* TOPO */}
      <div
        style={{
          borderRadius: "8px 8px 0 0",
          border: `1px solid ${cardStyles.card.border}`,
          display: "flex",
          alignItems: "center",
          padding: 6,
          gap: 6,
          backgroundColor: cardStyles.card.background,
        }}
      >
        {/* IMG + POSIÇÃO */}
        <div
          style={{
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            position: "relative",
            gap: 7,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 8,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* POSIÇÃO */}
          <div
            style={{
              height: 16,
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "8px 0 6px 0",
              background: cardStyles.card.value,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 4px",
              fontSize: 12,
              fontWeight: "bold",
              color: "#000",
              fontFamily: cardStyles.fonts.value,
            }}
          >
            {position}
          </div>
        </div>

        {/* BOTÃO JOGAR */}
        <PlayButton size="sm" onClick={onPlay} />
      </div>

      {/* INFO */}
      <div
        style={{
          borderRadius: "0 0 8px 8px",
          backgroundColor: cardStyles.card.bodyBackground,
          border: `1px solid ${cardStyles.card.border}`,
          display: "flex",
          flexDirection: "column",
          padding: 6,
        }}
      >
        <div
          style={{
            fontSize: 14,
            color: cardStyles.card.title,
            fontFamily: cardStyles.fonts.title,
          }}
        >
          {title}
        </div>

        <b
          style={{
            fontSize: 16,
            color: cardStyles.card.value,
            marginTop: 4,
            fontFamily: cardStyles.fonts.value,
          }}
        >
          {amount}
        </b>
      </div>
    </div>

  );
};

export default WinnerCard;
