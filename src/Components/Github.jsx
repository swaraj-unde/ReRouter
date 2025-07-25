import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const profile = useLoaderData();
  return (
    <div className="max-w-md mx-auto m-10 p-6 rounded-xl shadow-lg bg-white text-center">
      <img
        src={profile.avatar_url}
        alt="Swaraj Unde"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{profile.name}</h1>
      <p className="text-gray-600">@{profile.login}</p>
      <p className="mt-2">👥 Followers: {profile.followers}</p>
      <p>📦 Public Repos: {profile.public_repos}</p>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        🔗 View GitHub Profile
      </a>
    </div>
  );
}

export default Github;

export const githubProfile = async () => {
    const response = await fetch("https://api.github.com/users/swaraj-unde");
    return response.json();
}