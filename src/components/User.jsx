import UserCard from "./UserCard";

const user1 = {
  name: "Raj Kumar",
  age: 20,
  state: "Uttar Pradesh",
  avatar: "/avatar.webp",
  interests: ["Dance", "Hindi Poetry", "Cultural Festivals"],
  learningGoal: "Wants to learn Bengali language and explore its literature.",
};
const user2 = {
  name: "Vansh Kumar Patel",
  age: 22,
  state: "Mumbai",
  avatar: "/avatar.webp",
  interests: ["Dance", "English literatuer", "Cultural Festivals"],
  learningGoal: "Wants to learn Bengali language and explore its literature.",
};
const user3 = {
  name: "Sumit Awasthi",
  age: 21,
  state: "Punjab",
  avatar: "/avatar.webp",
  interests: ["Dance", "Hindi Poetry", "Folk dance"],
  learningGoal: "Wants to learn Bengali language and explore its literature.",
};
const user4 = {
  name: "Sumit Kumar",
  age: 14,
  state: "Tamilnadu",
  avatar: "/avatar.webp",
  interests: ["Dance", "Hindi Poetry", "Cultural Festivals"],
  learningGoal: "Wants to learn Bengali language and explore its literature.",
};
const user5 = {
  name: "Unnati Singh",
  age: 24,
  state: "Gujrat",
  avatar: "/avatar.webp",
  interests: ["Dance", "Hindi Poetry", "Cultural Festivals"],
  learningGoal: "Wants to learn Bengali language and explore its literature.",
};
const user6 = {
  name: "Bhuvi",
  age: 34,
  state: "Uttar Pradesh",
  avatar: "/bhuvi.webp",
  interests: ["Cricket", "Bowler", "Indian Army"],
  learningGoal: "Wants to win the next ICC World-cup",
};

export default function User() {
  return (
    <div className="min-h-screen p-6 sm:p-10">
      <div
        className="
          grid 
          gap-6
          sm:grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          justify-items-center
        "
      >
        <UserCard user={user1} />
        <UserCard user={user2} />
        <UserCard user={user3} />
        <UserCard user={user4} />
        <UserCard user={user5} />
        <UserCard user={user6} />
      </div>
    </div>
  );
}
