export interface Activity {
  id: number;
  icon: string; 
  title: string;
  subtitle: string;
  status: string;
}

export const activities: Activity[] = [
  { id: 1, icon: "/icons/ActivityDown.png", title: "250 calls from HoduCC", status: "Imported", subtitle: "250 calls from HoduCC" },
  { id: 2, icon: "/icons/ActivityUp.png", title: "250 calls from HoduCC", status: "Exported", subtitle: "250 calls from HoduCC" },
  { id: 3, icon: "/icons/Vect.png", title: "250 calls from HoduCC", status: "Tagged", subtitle: "250 calls from HoduCC" },
  { id: 4, icon: "/icons/Activity.png", title: "250 calls from HoduCC", status: "Flagged", subtitle: "250 calls from HoduCC" },
  { id: 5, icon: "/icons/Vect.png", title: "250 calls from HoduCC", status: "Tagged", subtitle: "250 calls from HoduCC" },
  { id: 6, icon: "/icons/ActivityUp.png", title: "250 calls from HoduCC", status: "Exported", subtitle: "250 calls from HoduCC" },
];

