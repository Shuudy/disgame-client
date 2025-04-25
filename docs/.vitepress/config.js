import { defineConfig } from "vitepress";
import pkg from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Disgame",
    description:
        "A web application that connects gamers looking to play the same games with others who share similar interests and playstyles.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Getting Started", link: "/getting-started" },
            {
                text: pkg.version,
                items: [
                    {
                        text: "Changelog",
                        link: "https://github.com/Shuudy/disgame-client/releases",
                    },
                ],
            },
        ],

        sidebar: [
            {
                text: "Introduction",
                items: [
                    { text: "Overview", link: "/introduction" },
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/Shuudy/disgame-client",
                text: "Client Repository",
            },
            {
                icon: "github",
                link: "https://github.com/Shuudy/disgame-server",
                text: "Server Repository",
            },
        ],
    },
});
