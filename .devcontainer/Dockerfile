FROM ubuntu:jammy
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update -y && apt install -y \
  build-essential \
  cmake \
  git \
  curl \
  language-pack-ja-base \
  language-pack-ja

# Install Volta
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME $HOME/.volta
ENV PATH $VOLTA_HOME/bin:$PATH

# Install github CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
  && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && apt update \
  && apt install gh -y

# Setup Japanese input
RUN echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc

# Setup git-completion and git-prompt
RUN curl -o /root/.git-completion.sh \
  https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
RUN curl -o /root/.git-prompt.sh \
  https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh
RUN <<EOF
cat <<_DOC_ >> /root/.bashrc
if [ -f ~/.git-completion.sh ]; then
    source ~/.git-completion.sh
fi
if [ -f ~/.git-prompt.sh ]; then
    source ~/.git-prompt.sh
fi
GIT_PS1_SHOWDIRTYSTATE=true
GIT_PS1_SHOWUNTRACKEDFILES=true
GIT_PS1_SHOWSTASHSTATE=true
GIT_PS1_SHOWUPSTREAM=auto

PS1='[\[\033[32m\]\u@\h\[\033[00m\] \[\033[33m\]\w\[\033[1;36m\]\$(__git_ps1 " (%s)")\[\033[00m\]]\n\\\$ '

_DOC_
EOF