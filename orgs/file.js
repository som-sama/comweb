 // An array of objects representing the communities
 const communities = [
    { name: "Eddie Hub", discordLink: "https://discord.gg/abc123" },
    { name: "DevV House", discordLink: "https://discord.gg/def456" },
    { name: "Boot Dev", discordLink: "https://discord.gg/def456"},
    // Add more communities here
  ];

  communities.forEach(community => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = community.discordLink;
    link.textContent = community.name;
    listItem.appendChild(link);
    document.getElementById("community-list").appendChild(listItem);
  });