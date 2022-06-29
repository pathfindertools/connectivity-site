---
draft: true
blocks:
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-48 pb-10 pr-20 pl-20 sm:pt-24 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: Publicly reachable nodes
    subhead: 'TCP, or even better QUIC'
    body: >
      Full nodes (e.g. go-libp2p, rust-libp2p, node.js-libp2p) use TCP and QUIC
      to connect to each other. Imagine two servers running in data centers.
    items:
      - cardType: pullquote
        headline: TCP in libp2p
        subhead: ''
        text: >
          *   First a node establishes a TCP connection to another node.

          *   They then negotiate a security protocol (Noise, TLS) and perform a
          cryptographic handshake. The connection is now encrypted and the peer
          IDs have been verified.

          *   They then apply a stream multiplexer (mplex, yamux).


          TCP is a solid option, works in all networks (home and private).
          However, setting up a the libp2p takes quite a few network roundtrips.
      - cardType: pullquote
        headline: Support
        subhead: ''
        text: "*   go-libp2p: ✔\n*   rust-libp2p: ✔\n*   node.js-libp2p: ✔\n*   Chrome: ❌\_(not possible)\n*   Firefox: ❌\_(not possbile)\n*   Safari: ❌\_(not possible)\n"
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: ''
    subhead: ''
    body: >
      QUIC is a new transport protocol which is always encrypted (using TLS 1.3)
      and provides native stream multiplexing.


      Whenever possible, QUIC should be preferred over TCP. For more benefits of
      using QUIC, see #holepunching. But: UDP (which QUIC runs on top of) is
      blocked in ~1% of networks.
    items:
      - cardType: pullquote
        headline: QUIC in libp2p
        subhead: ''
        text: >
          Under most conditions, QUIC provides superior performance to TCP: The
          libp2p handshake is (at least) 3 network round-trips faster, and
          provides better performance in shaky network conditions.


          To verify the remote’s peer ID, it is [added to the TLS
          certificate](https://github.com/libp2p/specs/blob/master/tls/tls.md)
          (including a signature using the host’s key) which is used during the
          handshake. Once the handshake is complete, both sides have
          cryptographically verified each other’s identity.
      - cardType: pullquote
        headline: Support
        text: "*   go-libp2p: ✔\n*   rust-libp2p: ⏱\_([work in progress](https://github.com/libp2p/rust-libp2p/pull/2289))\n*   node.js-libp2p: ❌\n*   Chrome: ❌\_(not possible)\n*   Firefox: ❌\_(not possible)\n*   Safari: ❌\_(not possible)\n"
    navigationLabel: ''
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: Hole Punching
    subhead: ''
    body: >
      Not all nodes are located in a publicly reachable position. Most nodes are
      behind NATs or firewalls: in home networks, in corporate networks, and
      even on mobile devices (carrier-grade NATs).
    navigationLabel: Hole Punching
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: Browsers
    subhead: ''
    body: >
      We want to be able to access the libp2p network from a web browser.
      Browsers are really, really good at speaking HTTP (using an underlying TCP
      connection for HTTP/1.1 and HTTP/2, and a QUIC connection for HTTP/3), but
      getting access to streams has been challenging.
    items:
      - cardType: pullquote
        headline: Streams vs. Request-Response
        subhead: ''
        text: >
          HTTP is a request-response scheme. The client (browser) sends a
          request, and then waits for a response.

          libp2p on the other hand deals with streams. A stream is more flexible
          than a request-response scheme: it allows continuous bidirectional
          communication, both parties can send and receive data at any time.

          Nevertheless, we’ve been thinking how about how to make libp2p more
          compatible with request-response schemes (see below).
    navigationLabel: Browsers
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: WebSocket
    subhead: ''
    body: >
      WebSocket has been around for more than 10 years. It allows “hijacking” of
      a HTTP/1.1 connection (it was later also standardized for HTTP/2), giving
      the browser access to the underlying TCP connection.
    items:
      - cardType: pullquote
        headline: WebSocket Upgrade
        subhead: ''
        text: >
          The browser first establishes the TCP connection and sends an HTTP
          request:

          GET /chat HTTP/1.1 Host: server.example.com Upgrade: websocket
          Connection: Upgrade

          The server can accept this upgrade request by sending a HTTP 200
          response. All bytes sent on the TCP connection after this are now
    navigationLabel: WebSocket
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: WebTransport
    subhead: ''
    body: >
      While WebSockets allows the browser to “hijack” a TCP connection,
      WebTransport does the same thing with a QUIC connection. The protocol is
      brand-new, in fact, there’s not even an RFC yet: It’s still under
      development by the IETF WebTransport Working Group and the W3C
      WebTransport Working Group.
    items:
      - cardType: pullquote
        headline: WebTransport Upgrade
        subhead: ''
        text: >
          The browser first establishes an HTTP/3 connection to the server. It
          then opens a new HTTP stream, and sends an Extended CONNECT request.

          HEADERS :method: CONNECT :protocol: webtransport :scheme: https
          :authority: https://chat.example.com :path: /chat Origin:
          mywebsite.com

          The server can accept the upgrade by sending a HTTP 200 response. Both
          endpoints can now open streams associated with this WebTransport
          session.
    navigationLabel: WebTransport
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-gray-light font-1 text-base mb-0 '
      buttonType: secondary
    background:
      fillStyles: bg-black
    label: ''
    headline: WebRTC
    subhead: ''
    body: >
      Usually used for video conferencing, WebRTC is a suite of protocols that
      allows browsers to connect to servers, and to other browsers, and even
      punch through NATs.


      In addition to enabling audio and video communication (for which packets
      are sent using an unreliably transport), WebRTC also establishes
      stream-based communication on top of SCTP and exposes reliable streams,
      called WebRTC Data Channels.
    items:
      - cardType: pullquote
        headline: WebRTC Connection Establishment
        subhead: ''
        text: >
          In order to connect, two WebRTC nodes need to exchange SDP (Session
          Description Protocol) packets. These packets contain all the
          information that’s needed to establish the connection: (public) IP
          addresses, supported WebRTC features, audio and video codecs etc.


          WebRTC specifies the format of this packet, but it doesn’t specify
          *how* they are exchanged. This is left to the application.
      - cardType: pullquote
        headline: Securing the WebRTC Connection
        subhead: ''
        text: >
          As WebRTC is built to facilitate video conferencing between browsers,
          browsers accept self-signed certificates by default. However, they
          don’t provide any way to encode anything into the certificate, thus
          libp2p nodes need to run a second handshake on top of a WebRTC stream,
          similar to WebTransport.
        link: ''
        buttonLabel: ''
      - cardType: pullquote
        headline: Hole Punching
        text: >
          WebRTC uses a different hole punching mechanism than libp2p. It uses
          the STUN protocol to determine its public IP addresses.
      - cardType: basic
        headline: Get involved
        text: |
          &#x20;
        link: 'https://github.com/libp2p/specs/pull/412'
        buttonLabel: Specification
    navigationLabel: WebRTC
    _template: textCards
meta:
  pageTitle: LibP2P
  pageDescription: Publicly reachable nodes
---

