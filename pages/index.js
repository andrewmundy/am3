import Head from "next/head";

const Home = () => (
  <div className="container">
    <h1 className="mint">Andrew Mundy</h1>
    <h1 className="roto">Andrew Mundy</h1>
    <h1 className="roto">Andrew Mundy</h1>
    <style jsx>{``}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
      h1.mint {
        font-family: "MintGrotesk-Bold";
        font-size: 100px;
      }
      h1.roto {
        font-family: "Rotor-0";
        font-size: 100px;
      }
      .container {
        padding: 100px;
      }

      h1 {
        font-variation-settings: "style" Rotor-0;
        animation: breathe 4000ms infinite forwards;
      }

      @keyframes breathe {
        60% {
          font-variation-settings: "style" Rotor-90;
        }

        100% {
          font-variation-settings: "style" Rotor-180;
        }
      }
      * {
        box-sizing: border-box;
      }
      @font-face {
        font-family: "MintGrotesk-Black";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Black.otf");
      }
      @font-face {
        font-family: "MintGrotesk-Bold";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Bold.otf");
      }
      @font-face {
        font-family: "MintGrotesk-Medium";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Medium.otf");
      }
      @font-face {
        font-family: "Rotor-0";
        src: url("/fonts/Rotor/rotor-trial-0.otf");
      }
      @font-face {
        font-family: "Rotor-90";
        src: url("/fonts/Rotor/rotor-trial-90.otf");
      }
      @font-face {
        font-family: "Rotor-180";
        src: url("/fonts/Rotor/rotor-trial-180.otf");
      }
    `}</style>
  </div>
);

export default Home;
