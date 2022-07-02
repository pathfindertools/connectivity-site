---
draft: true
blocks:
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-20 pl-20
      contentWidth: w-full
      columns: '3'
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: 'text-white font-1 text-5xl mb-0 '
      subheadStyles: 'text-white font-1 text-3xl mb-0 '
      textStyles: 'text-white font-1 undefined mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray
      padding: pt-4 pb-4 pr-4 pl-4
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: 'text-white font-1 text-2xl mb-0 '
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-white font-1 text-sm mb-0 '
      buttonType: primary
    label: ''
    headline: ''
    subhead: ''
    body: >
      \<header image>


      Nodes in different positions in the network use different technology to
      connect to each other.


      Learn more about how libp2p achieves universal connectivity across
      networks.
    buttons:
      - label: Chat with Developers →
        link: 'https://filecoin.io/slack'
        type: primary
    _template: textCards
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
    headline: Public nodes
    subhead: TCP
    body: >
      Public nodes is any node running in a data centers, or on a dedicated
      connection without any router / NAT / firewall in between.


      Full nodes (e.g. go-libp2p, rust-libp2p, node.js-libp2p) use TCP and QUIC
      to connect to each other.&#x20;
    items:
      - cardType: pullquote
        headline: TCP in libp2p
        subhead: ''
        text: >
          1.  establish a TCP connection to the remote node

          2.  negotiate a security protocol (Noise or TLS 1.3), perform a
          cryptographic handshake. The connection is now encrypted and the peer
          IDs have been verified.

          3.  apply a stream multiplexer (yamux or mplex).


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
    subhead: QUIC
    body: >
      QUIC is a new transport protocol which is always encrypted (using TLS 1.3)
      and provides native stream multiplexing.


      Whenever possible, QUIC should be preferred over TCP. For more benefits of
      using QUIC, see #holepunching.&#x20;


      However: UDP (which QUIC runs on top of) is blocked in ~1% of networks.
      Not all libp2p implementations support QUIC yet, therefore TCP is still
      needed as a fallback.
    items:
      - cardType: pullquote
        headline: QUIC in libp2p
        subhead: ''
        text: >
          Under most conditions, QUIC provides superior performance to TCP: The
          libp2p handshake is (at least!) 3 network round-trips faster, and
          provides better performance in unstable network conditions.


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
      - cardType: code
        headline: Code
        text: |
          const socket = new WebSocket('ws://chat.example.com/chat');
          // TODO: show how to send some and receive some data
      - cardType: pullquote
        headline: WebSocket in libp2p
        text: >
          1.  TCP handshake (1 RTT)

          2.  WebSocket Upgrade Request (1 RTT).

          3.  Multistream security protocol negotiation (1 RTT)

          4.  Security Handshake (Noise or TLS, 1 RTT)

          5.  Multistream stream multiplexer negotiation (1 RTT)


          5 round trips is quite a long time for setting up a connection.


          Unfortunately, this is not the whole story. In recent years, the web
          has moved towards ubiquitous encryption, and browsers have started
          enforcing that web content is loaded via encrypted connection.
          Specifically, when on a website loaded via HTTPS, browsers will block
          plaintext WebSocket connections, and require a WebSocket Secure (wss)
          connection.


          WebSocket Secure is Websocket that doesn’t use HTTP, but HTTPS, to do
          the Upgrade request. That means that in addition to the 5 round trips
          listed above, there’ll be another roundtrip for the TLS handshake.
      - cardType: pullquote
        headline: TLS Certificate Verification in the Browser
        text: >
          When establishing a connection to a web server, the client asks the
          server for a TLS certificate. Conceptually, the TLS certificate says
          “the domain [libp2p.io](http://libp2p.io/) belongs to the owner of
          this certificate”, together with a (cryptographic) signature.


          Of course, the browser can’t just trust any signature. If an attacker
          wants to impersonate libp2p.io, she can just sign her own certificate.
          Browsers are shipped with a list of signatories, called Certificate
          Authorities (CA) that they trust. The most widely used CA on the
          internet is LetsEncrypt.


          This is a problem for libp2p. Most nodes on the network don’t even
          have a domain name, let alone a (CA-signed) certificate. Nodes that do
          can already configure WebSocket Secure in their libp2p node, but only
          very few nodes.
      - cardType: pullquote
        headline: ACME to the rescue?
        text: >
          The ACME protocol allows a server to obtain a certificate from a CA
          fully automatically. To be able to issue the certificate, the CA needs
          to verify that the server actually controls the domain. There are 2
          ways:


          1.  HTTP / TLS challenge: The CA instructs the server to publish a
          (pseudo-) random value on the website. It then makes a request to that
          website, and checks the value. The server is only able to publish the
          value if it actually controls the contents of the website.

          2.  DNS challenge: The CA instructs the server to publish the random
          value in a DNS TXT record. The server thereby proves that it can
          modify the DNS records for that domain. DNS challenges are the only
          way to obtain wildcard certificates.


          There are a couple of problems with this approach:


          *   libp2p nodes still need to possess a domain name.

          *   Using the HTTP / TLS challenge requires starting a webserver on
          port 80 or 443. On Linux, a non-privileged user is not able to bind to
          port smaller than 1024. It might also conflict with other processes
          that are listening on said ports.

          *   The DNS challenge requires (programmatic) access to the DNS
          records for the domain. This is not possible without special
          configuration.
      - cardType: pullquote
        headline: Support
        text: |
          go-libp2p: ✔

          rust-libp2p: ✔

          node.js-libp2p: ???

          Chrome: ✔

          Firefox: ✔

          Safari: ✔
      - cardType: pullquote
        headline: Get involved!
        text: >
          There are solutions to assign certificates to a fleet of nodes, see
          for example
          [https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/](https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/).


          Another option would be using IP certificates. They’re quite rare, and
          not a lot of CAs support generating them, but this might be worth
          investigating.
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


          HEADERS


          *   method: CONNECT

          *   protocol: webtransport

          *   scheme: https

          *   authority: https://chat.example.com

          *   path: /chat

          *   Origin: mywebsite.com


          The server can accept the upgrade by sending a HTTP 200 response. Both
          endpoints can now open streams associated with this WebTransport
          session.
      - cardType: basic
        text: >
          Similar to how QUIC shines over TCP, WebTransport should be preferred
          over WebSocket. But for libp2p, there’s one more reason to use
          WebTransport instead of WebSocket. As we’ve seen above, browsers
          enforce secure WebSocket connections when the website is loaded via
          HTTPS, and this is no different when using WebTransport.
      - cardType: code
        headline: Code
        text: >
          const conf = \{

          &#x20;   "serverCertificateHashes": \[

          &#x20;       \{

          &#x20;           "algorithm": "sha-256",

          &#x20;           "value": hash1,

          &#x20;       }

          &#x20;   ]

          }


          const transport = new WebTransport('https://chat.example.com/chat',
          conf)


          // TODO: show how to open / accept streams and how to send data
      - cardType: pullquote
        headline: Securing the WebTransport Connection
        text: >
          What does the certificate hash secure? By itself, not much. In
          particular, the server doesn’t have any way to know the client’s peer
          ID.


          We therefore run a Noise handshake on top of the first WebTransport
          stream. This handshake does two things:


          1.  It exchanges and cryptographically verifies the peer IDs of the
          endpoints.

          2.  It binds the certificate hash to the WebTransport session, making
          sure there’s no MITM attack.
      - cardType: basic
        headline: Counting Round Trips
        text: >
          1.  QUIC Handshake (1 RTT)

          2.  WebTransport Upgrade (1 RTT)

          3.  Noise Handshake (1 RTT)


          This is a lot faster than the WebSocket handshake. Step 2 and 3 can
          potentially be run in parallel, although a bug in Chrome’s
          WebTransport implementation currently forces sequential execution.
      - cardType: pullquote
        headline: Get Involved
        text: >
          This is a very new protocol, and we can use your help.


          Specification:
          [https://github.com/libp2p/specs/pull/404](https://github.com/libp2p/specs/pull/404)


          Go implementation:
          [https://github.com/marten-seemann/webtransport-go](https://github.com/marten-seemann/webtransport-go)
      - cardType: pullquote
        headline: Support
        text: "go-libp2p: ⏱\_(work in progress)\n\nrust-libp2p: ❌\n\nnode.js-libp2p: ❌\n\nChrome: ✔️\_\n\nFirefox: ⏱\_(work in progress, TODO: link to issue)\n\nSafari: ❌\_(status unknown)\n"
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

