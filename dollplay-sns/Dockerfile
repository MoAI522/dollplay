FROM ubuntu:jammy
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update -y && apt install -y \
  build-essential \
  cmake \
  curl

# Install Volta
RUN curl https://get.volta.sh | bash
WORKDIR /workspace
RUN /root/.volta/bin/volta setup