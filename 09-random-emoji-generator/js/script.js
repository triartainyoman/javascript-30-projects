const handleGenerate = () => {
  const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "🥰",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🥳",
    "😏",
    "😌",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤔",
    "🤨",
    "🧐",
    "😐",
    "😶",
    "😇",
    "🙃",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤔",
    "🤨",
    "🧐",
    "😬",
    "🥺",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🥵",
    "🥶",
    "🥴",
    "😵",
    "🤯",
    "🤠",
    "🥳",
    "😎",
    "🤓",
    "🧐",
    "😕",
    "😟",
  ];

  let randomNumber = Math.floor(Math.random() * emojis.length);
  let randomEmoji = emojis[randomNumber];

  document.getElementById("emoji-card").style.opacity = 1;
  document.getElementById("emoji").textContent = `${randomEmoji}`;
};

const handleCopy = () => {
  let emo = document.getElementById("emoji");
  const textEmo = emo.textContent || emo.innerText;
  navigator.clipboard.writeText(textEmo);
};
