const IconChat = ({ isSelected = false }) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.75 15L7.67474 18.1137C7.24579 18.548 7.03131 18.7652 6.84695 18.7805C6.68701 18.7938 6.53042 18.7295 6.42596 18.6076C6.30556 18.4672 6.30556 18.162 6.30556 17.5515V15.9916C6.30556 15.444 5.85707 15.0477 5.3152 14.9683V14.9683C4.00374 14.7762 2.97378 13.7463 2.78168 12.4348C2.75 12.2186 2.75 11.9605 2.75 11.4444V6.8C2.75 5.11984 2.75 4.27976 3.07698 3.63803C3.3646 3.07354 3.82354 2.6146 4.38803 2.32698C5.02976 2 5.86984 2 7.55 2H14.95C16.6302 2 17.4702 2 18.112 2.32698C18.6765 2.6146 19.1354 3.07354 19.423 3.63803C19.75 4.27976 19.75 5.11984 19.75 6.8V11M19.75 22L17.5736 20.4869C17.2677 20.2742 17.1147 20.1678 16.9482 20.0924C16.8004 20.0255 16.6451 19.9768 16.4856 19.9474C16.3058 19.9143 16.1195 19.9143 15.7469 19.9143H13.95C12.8299 19.9143 12.2698 19.9143 11.842 19.6963C11.4657 19.5046 11.1597 19.1986 10.968 18.8223C10.75 18.3944 10.75 17.8344 10.75 16.7143V14.2C10.75 13.0799 10.75 12.5198 10.968 12.092C11.1597 11.7157 11.4657 11.4097 11.842 11.218C12.2698 11 12.8299 11 13.95 11H19.55C20.6701 11 21.2302 11 21.658 11.218C22.0343 11.4097 22.3403 11.7157 22.532 12.092C22.75 12.5198 22.75 13.0799 22.75 14.2V16.9143C22.75 17.8462 22.75 18.3121 22.5978 18.6797C22.3948 19.1697 22.0054 19.5591 21.5154 19.762C21.1478 19.9143 20.6819 19.9143 19.75 19.9143V22Z"
      stroke={isSelected ? "#444CE7" : "#98A2B3"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      css={{ transition: "stroke 0.2s ease-in-out" }}
    />
  </svg>
);

export default IconChat;
