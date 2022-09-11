"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4674:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"After Install Mint 21",slug:"after-install-mint-21",tags:["linux","mint","neovim","docker"],authors:["p0nch0d3v"]},l=void 0,s={permalink:"/after-install-mint-21",source:"@site/blog/2022-08-30-after-install-mint.md",title:"After Install Mint 21",description:"Some packages",date:"2022-08-30T00:00:00.000Z",formattedDate:"August 30, 2022",tags:[{label:"linux",permalink:"/tags/linux"},{label:"mint",permalink:"/tags/mint"},{label:"neovim",permalink:"/tags/neovim"},{label:"docker",permalink:"/tags/docker"}],hasTruncateMarker:!1,authors:[{name:"p0nch0 d3v",title:"Software Developer",url:"https://github.com/p0nch0d3v",imageURL:"https://github.com/p0nch0d3v.png",key:"p0nch0d3v"}],frontMatter:{title:"After Install Mint 21",slug:"after-install-mint-21",tags:["linux","mint","neovim","docker"],authors:["p0nch0d3v"]},prevItem:{title:"Coding Problem 2022-09-08",permalink:"/coding-problem-2022-09-08"},nextItem:{title:"Change Docker storage location",permalink:"/change-docker-storage-location"}},i={authorsImageUrls:[void 0]},c=[{value:"Some packages",id:"some-packages",level:3},{value:"ohmyzsh",id:"ohmyzsh",level:3},{value:"SpaceVim",id:"spacevim",level:3},{value:"Docker",id:"docker",level:3},{value:"Google Chrome",id:"google-chrome",level:3},{value:"Sublime Text &amp; Merge",id:"sublime-text--merge",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Virtualbox",id:"virtualbox",level:3},{value:"Skype",id:"skype",level:3},{value:"Auto mount external drive",id:"auto-mount-external-drive",level:3},{value:"List drives",id:"list-drives",level:4},{value:"Edit File System Table",id:"edit-file-system-table",level:4},{value:"Add the corresponding unique id, as the following",id:"add-the-corresponding-unique-id-as-the-following",level:4},{value:"Ensure the locations exists",id:"ensure-the-locations-exists",level:4},{value:"Change the owner and/or group of the directory",id:"change-the-owner-andor-group-of-the-directory",level:4},{value:"Mount device",id:"mount-device",level:4},{value:"Add the following cron job",id:"add-the-following-cron-job",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"some-packages"},"Some packages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y zsh \\\n     neofetch \\\n     neovim \\\n     git \\\n     openssh-server \\\n     curl \\\n     bat \\\n     chromium \\\n     wget \\\n     curl \n")),(0,n.kt)("h3",{id:"ohmyzsh"},"ohmyzsh"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n')),(0,n.kt)("h3",{id:"spacevim"},"SpaceVim"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sLf https://spacevim.org/install.sh | bash -s -- --install neovim\n")),(0,n.kt)("h3",{id:"docker"},"Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /etc/apt/keyrings\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && \\\nsudo apt-get install -y docker-ce \\\n     docker-ce-cli \\\n     containerd.io \\\n     docker-compose \\\n     docker-compose-plugin\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/change-docker-storage-location"},"Change Docker Storage Location")),(0,n.kt)("h3",{id:"google-chrome"},"Google Chrome"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb --output-document /tmp/google-chrome-stable_current_amd64.deb\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb\n")),(0,n.kt)("h3",{id:"sublime-text--merge"},"Sublime Text & Merge"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && \\\nsudo apt-get install --yes sublime-text sublime-merge\n")),(0,n.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sh -c 'echo \"deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main\" > /etc/apt/sources.list.d/vscode.list'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -f packages.microsoft.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install --yes apt-transport-https && \\\nsudo apt update && \\\nsudo apt install --yes code \n")),(0,n.kt)("h3",{id:"virtualbox"},"Virtualbox"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list > /dev/null\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && \\\nsudo apt-get install --yes virtualbox-6.1\n")),(0,n.kt)("h3",{id:"skype"},"Skype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install software-properties-common apt-transport-https wget ca-certificates gnupg2 -y\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O- https://repo.skype.com/data/SKYPE-GPG-KEY | sudo gpg --dearmor | sudo tee /usr/share/keyrings/skype.gpg\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/skype.gpg] https://repo.skype.com/deb stable main" | sudo tee /etc/apt/sources.list.d/skype-stable.list\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo apt-get update && \\\nsudo apt install skypeforlinux -y\n")),(0,n.kt)("h3",{id:"auto-mount-external-drive"},"Auto mount external drive"),(0,n.kt)("h4",{id:"list-drives"},"List drives"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /dev/disk/by-uuid\n")),(0,n.kt)("h4",{id:"edit-file-system-table"},"Edit File System Table"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fstab\n")),(0,n.kt)("h4",{id:"add-the-corresponding-unique-id-as-the-following"},"Add the corresponding unique id, as the following"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"UUID=00000000-0000-0000-0000-000000000000 /mnt/{location}  ext4    user,rw,exec   0       3")),(0,n.kt)("h4",{id:"ensure-the-locations-exists"},"Ensure the locations exists"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir --parents /mnt/{location}\n")),(0,n.kt)("h4",{id:"change-the-owner-andor-group-of-the-directory"},"Change the owner and/or group of the directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R $USER:$USER /mnt/{location}/\n")),(0,n.kt)("h4",{id:"mount-device"},"Mount device"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mount /dev/{device}\n")),(0,n.kt)("h3",{id:"add-the-following-cron-job"},"Add the following cron job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"crontab -e\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"*/15 * * * * /bin/sh /mnt/{location}/development/copy_to_backup.sh")))}u.isMDXComponent=!0}}]);