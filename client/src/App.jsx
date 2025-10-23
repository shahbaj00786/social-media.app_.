import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { ChatBox } from "./pages/ChatBox";
import { Connections } from "./pages/Connections";
import { Messages } from "./pages/Message";
import { Discover } from "./pages/Discover";
import { Profile } from "./pages/Profile";
import { CreatePost } from "./pages/CreatePost";
import { useUser } from "@clerk/clerk-react";
import { Layout } from "./pages/Layout";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const user = useUser();
  console.log(user)

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={!user.isSignedIn ? <Login /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};


