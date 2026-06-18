@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background: #0b0b0b;
  color: #f5f5f5;
  overflow-x: hidden;
}

/* noise texture */
.noise {
  position: fixed;
  inset: 0;
  background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  opacity: 0.05;
  pointer-events: none;
}

/* HEADER */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(20px);
  background: rgba(0,0,0,0.2);
  z-index: 10;
}

.logo {
  font-size: 12px;
  letter-spacing: 4px;
}

nav a {
  margin-left: 25px;
  font-size: 13px;
  color: #aaa;
  text-decoration: none;
  transition: 0.3s;
}

nav a:hover {
  color: white;
}

/* HERO */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 80px;
}

.sub {
  font-size: 12px;
  letter-spacing: 6px;
  opacity: 0.5;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 56px;
  font-weight: 300;
  max-width: 800px;
  line-height: 1.2;
}

/* WORK */
.work {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 120px 80px;
}

.card {
  height: 380px;
  background: #121212;
  border: 1px solid rgba(255,255,255,0.06);
  position: relative;
  transition: 0.6s ease;
  overflow: hidden;
}

.card span {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 13px;
  color: #aaa;
}

.card:hover {
  transform: translateY(-10px);
  border-color: rgba(255,255,255,0.2);
}

/* ABOUT + CONTACT */
.about, .contact {
  padding: 120px 80px;
  max-width: 700px;
}

h2 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  color: #aaa;
  line-height: 1.8;
}

/* FOOTER */
footer {
  padding: 60px;
  text-align: center;
  font-size: 12px;
  opacity: 0.4;
}

/* reveal animation */
.card, .about, .contact {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.show {
  opacity: 1;
  transform: translateY(0);
}
