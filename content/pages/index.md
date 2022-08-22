---
draft: true
blocks:
  - style:
      alignment: 'flex-row-reverse text-left items-center items-start-vertical '
      featureContent: 'w-1/2 min-h-0 '
      padding: pt-52 pb-20 pr-10 pl-20
      featureImage: 'object-center object-scale-down '
      imagePadding: pt-52 pb-20 pr-20 pl-10
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-1 text-5xl mb-5 font-bold
      subheadStyles: text-white font-1 text-base mb-5 font-bold
      textStyles: 'text-white font-1 undefined mb-8 '
      contentOrder: labelHeadingsContent
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1657648092/libp2p/libp2p-hero_hath9f.svg
    label: ''
    headline: libp2p Connectivity
    subhead: >-
      Depending on their positions in the network, noes use different technology
      to connect to other nodes.
    body: >
      Learn more about how libp2p achieves universal connectivity across
      networks.
    buttons:
      - label: Chat With Developers
        link: /
        type: primary
    _template: feature
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-10 pb-10 pr-20 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
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
    headline: Standalone Node ⇄ Standalone Node
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
        headline: Counting Round Trips
        text: >
          1.  TCP Handshake

          2.  Multistream Negotiation of the Security Protocol

          3.  Security Handshake (TLS 1.3 or Noise)

          4.  Multistream Negotiation of the Stream Multiplexer


          This is the most optimistic assumption. In case the peer doesn’t
          support the protocol suggested in a Multistream Negotiation step, this
          will incur additional round trips.
      - cardType: pullquote
        headline: Support
        subhead: ''
        text: "*   go-libp2p: ✔\n*   rust-libp2p: ✔\n*   node.js-libp2p: ✔\n*   Chrome: ❌\_(not possible)\n*   Firefox: ❌\_(not possbile)\n*   Safari: ❌\_(not possible)\n"
    navigationLabel: TCP
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
      QUIC is a UDP-based transport protocol which is always encrypted (using
      TLS 1.3) and provides native stream multiplexing.


      Whenever possible, QUIC should be preferred over TCP. For more benefits of
      using QUIC, see #holepunching.&#x20;


      However: UDP is blocked in ~5-10% of networks. Therefore TCP is still
      needed as a fallback.
    items:
      - cardType: pullquote
        headline: Counting Round Trips
        subhead: ''
        text: >
          1.  QUIC handshake


          That’s all there is. QUIC verifies the client’s address (that’s what
          TCP’s 3-way handshake is there for) and performs the TLS 1.3 handshake
          in parallel. And since QUIC comes with transport-level stream
          multiplexing, we don’t need to set up a separate stream multiplexer.


          For resumed connections, QUIC even supports a 0-RTT handshake,
          although we’re currently not (yet) making use of that in libp2p.
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
    navigationLabel: QUIC
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


      Nodes behind firewalls / NATs can dial any node on the public internet,
      but they cannot receive incoming connections from outside their local
      network.
    items:
      - cardType: pullquote
        headline: Relay Server
        text: >
          When a libp2p boots up, one of the first things it does it determine
          its position in the network: is it a public node, reachable from the
          public internet, or is it a private node, located behind a firewall or
          a NAT.


          A private node will start looking for relay servers on the network,
          and obtain a reservation with (at least) one of them. This entails
          keeping a connection open to that relay. The relay will now forward
          traffic from other nodes.


          Conversely, a public node will start the relay service, offering relay
          services to private nodes on the network. The relay service is
          designed such that it’s very cheap to run (in terms of CPU, memory and
          bandwith). This is achieved by limiting the number of reservations,
          the connection time for relayed connections as well as their
          bandwidth.
      - cardType: pullquote
        headline: Obtaining a Direct Connection
        text: >
          Obtaining a reservation with a relay is only half the story. After
          all, relayed connections are limited both in terms of time and
          bandwidth. Nodes therefore use relayed connections exclusively to
          coordinate the establishment of a direct connection.


          We need to distinguish two situations here:


          1.  The node trying to connect is a public node: This is the easier
          scenario. When the node behind the NAT accepts the relayed connection,
          it notices that the peer has a public IP address. It then dials a
          direct connection to that node, and closes the relayed connection.

          2.  The other node is also behind a NAT: Simply dialing the peer is
          not an option. It’s necessary to employ a technique called “hole
          punching”. This works by carefully timing simultaneous connection
          attempts from both sides. That way, the NATs on both sides are tricked
          into thinking that they’re dealing with outgoing connections.


          Setting up the direct connection requires quite some effort, but it’s
          worth it: Having a direct connection between two nodes makes sure that
          they are communicating with minimal latency possible, and can use the
          full bandwidth of the link.
      - cardType: pullquote
        headline: Support
        text: |
          go-libp2p

          rust-libp2p

          js-libp2p
      - cardType: pullquote
        headline: Further Reading
        text: |
          Paper: \<link DINPS paper>

          Spec: \<link circuit v2 spec>
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
    headline: Browser → Standalone Node
    subhead: ''
    body: >
      We want to be able to access the libp2p network from a web browser.
      Browsers are really, really good at speaking HTTP (using an underlying TCP
      connection for HTTP/1.1 and HTTP/2, and a QUIC connection for HTTP/3), but
      they don't allow access to the underlying connection.
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
    navigationLabel: ''
    _template: textCards
  - cardStyle:
      padding: pt-0 pb-0 pr-0 pl-0
      borderStyles: undefined undefined-0
      labelStyles: 'text-white font-2 text-base mb-px '
      headlineStyles: text-white font-2 text-xl mb-5 font-bold
      subheadStyles: 'text-white font-2 text-base mb-px '
      textStyles: 'text-white font-1 text-base mb-px '
      buttonType: primary
    style:
      labelStyles: 'undefined undefined undefined undefined '
      headlineStyles: text-white font-2 text-5xl mb-0 font-bold
      subheadStyles: 'undefined undefined undefined undefined '
      textStyles: 'text-white undefined text-base mb-16 '
    background:
      fillStyles: bg-black
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1657642678/libp2p/logo-websocket_jjds6v.png
    headline: WebSocket
    body: >
      WebSocket has been around for more than 10 years. It allows “hijacking” of
      a HTTP/1.1 connection (it was later also standardized for HTTP/2), giving
      the browser access to the underlying TCP connection.
    cards:
      - cardType: basic
        headline: WebSocket Upgrade
        text: >
          The browser first establishes the TCP connection and sends an HTTP
          request: GET /chat HTTP/1.1 Host: server.example.com Upgrade:
          websocket Connection: Upgrade The server can accept this upgrade
          request by sending a HTTP 200 response. All bytes sent on the TCP
          connection after this are now
        language: javascript
      - cardType: basic
        headline: Code
        text: ''
        language: javascript
        code: |-
          const socket = new WebSocket('ws://chat.example.com/chat');
          // TODO: show how to send some and receive some data
      - cardType: basic
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
        language: javascript
      - cardType: basic
        headline: TLS Certificate Verification in the Browser
        text: "When establishing a connection to a web server, the client asks the server for a TLS certificate. Conceptually, the TLS certificate says “the domain\_[libp2p.io](http://libp2p.io/)\_belongs to the owner of this certificate”, together with a (cryptographic) signature.\n\nOf course, the browser can’t just trust any signature. If an attacker wants to impersonate libp2p.io, she can just sign her own certificate. Browsers are shipped with a list of signatories, called Certificate Authorities (CA) that they trust. The most widely used CA on the internet is LetsEncrypt.\n\nThis is a problem for libp2p. Most nodes on the network don’t even have a domain name, let alone a (CA-signed) certificate. Nodes that do can already configure WebSocket Secure in their libp2p node, but only very few nodes.\n"
        language: javascript
      - cardType: basic
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
        language: javascript
    navigationLabel: WebSocket
    _template: sidebarCards
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
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        text: |
          go-libp2p: ✔

          rust-libp2p: ✔

          node.js-libp2p: ???

          Chrome: ✔

          Firefox: ✔

          Safari: ✔
      - cardType: cta
        headline: Get involved!
        text: >
          There are solutions to assign certificates to a fleet of nodes, see
          for example
          [https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/](https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/).


          Another option would be using IP certificates. They’re quite rare, and
          not a lot of CAs support generating them, but this might be worth
          investigating.
    navigationLabel: ''
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: undefined undefined-0
      labelStyles: 'text-white font-2 text-sm undefined '
      headlineStyles: 'text-white font-2 text-xl mb-5 '
      subheadStyles: 'text-white font-2 text-base undefined '
      textStyles: 'text-white font-2 text-base mb-8 '
      buttonType: primary
    style:
      labelStyles: 'text-white undefined undefined undefined '
      headlineStyles: text-white font-2 text-2xl mb-5 font-bold
      subheadStyles: 'text-white undefined text-base undefined '
      textStyles: 'text-white undefined text-base mb-16 '
    imageSrc: ''
    headline: WebTransport
    body: >
      While WebSockets allows the browser to “hijack” a TCP connection,
      WebTransport does the same thing with a QUIC connection.


      The protocol is brand-new, in fact, there’s not even an RFC yet: It’s
      still under development by the IETF WebTransport Working Group and the W3C
      WebTransport Working Group.
    cards:
      - cardType: basic
        headline: WebTransport Upgrade
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


          The server can accept the upgrade by sending a HTTP 200 OK response.
          Both endpoints can now open streams associated with this WebTransport
          session.
        language: javascript
      - cardType: basic
        headline: Code
        text: >
          Similar to how QUIC shines over TCP, WebTransport should be preferred
          over WebSocket. But for libp2p, there’s one more reason to use
          WebTransport instead of WebSocket. As we’ve seen above, browsers
          enforce secure WebSocket connections when the website is loaded via
          HTTPS, and this is no different when using WebTransport.
        language: javascript
        code: >-
          const conf = { "serverCertificateHashes": [ { "algorithm": "sha-256",
          "value": hash1, } ] }


          const transport = new WebTransport('https://chat.example.com/chat',
          conf)


          // TODO: show how to open / accept streams and how to send data
      - cardType: basic
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
        language: javascript
      - cardType: basic
        headline: Counting Round Trips
        text: >
          1.  QUIC Handshake (1 RTT)

          2.  WebTransport Upgrade (1 RTT)

          3.  Noise Handshake (1 RTT)


          This is a lot faster than the WebSocket handshake!


          Step 2 and 3 can potentially be run in parallel, although a bug in
          Chrome’s WebTransport implementation currently forces sequential
          execution.
        language: javascript
    navigationLabel: WebTransport
    _template: sidebarCards
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
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        text: "go-libp2p: ⏱\_(work in progress)\n\nrust-libp2p: ❌\n\nnode.js-libp2p: ❌\n\nChrome: ✔️\_\n\nFirefox: ⏱\_(work in progress, TODO: link to issue)\n\nSafari: ❌\_(status unknown)\n"
      - cardType: pullquote
        headline: Get Involved
        text: >
          This is a very new protocol, and we can use your help.


          Specification:
          [https://github.com/libp2p/specs/pull/404](https://github.com/libp2p/specs/pull/404)


          Go implementation:
          [https://github.com/marten-seemann/webtransport-go](https://github.com/marten-seemann/webtransport-go)
    navigationLabel: ''
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: undefined undefined-0
      labelStyles: 'text-white undefined undefined undefined '
      headlineStyles: 'text-white font-2 text-xl mb-5 '
      subheadStyles: 'text-white undefined undefined undefined '
      textStyles: 'text-white undefined undefined undefined '
      buttonType: primary
    style:
      labelStyles: 'text-white font-2 undefined undefined '
      headlineStyles: 'text-white font-2 text-2xl undefined '
      subheadStyles: 'text-white font-2 undefined undefined '
      textStyles: 'text-white font-1 text-base mb-16 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1657642674/libp2p/logo-webrtc_okp1ki.svg
    headline: WebRTC
    body: >
      Usually used for video conferencing, WebRTC is a suite of protocols that
      allows browsers to connect to servers, and to other browsers, and even
      punch through NATs.


      In addition to enabling audio and video communication (for which packets
      are sent using an unreliably transport), WebRTC also establishes
      stream-based communication on top of SCTP and exposes reliable streams,
      called WebRTC Data Channels.
    cards:
      - cardType: basic
        headline: Connection Establishment
        text: "In order to connect, two WebRTC nodes need to exchange SDP (Session Description Protocol) packets. These packets contain all the information that’s needed to establish the connection: (public) IP addresses, supported WebRTC features, audio and video codecs etc.\n\nWebRTC specifies the format of this packet, but it doesn’t specify\_*how*\_they are exchanged. This is left to the application.\n\nThere are two distinct use cases here.\n\n**Browser to Public Node**\n\nThis is useful in cases where WebSocket and WebTransport are not available. In this case, we don't need to actually exchange the SDP, but only\_*pretend*\_that we did that, and actually construct the SDP from the node's advertised multiaddress(es). This saves one round-trip.\n\n**Browser to Browser**\n\nConnection one browser to another browser usually requires hole punching, as browsers are usually used by people in their home or corporate networks (i.e. behind their home router or a corporate firewall, respectively), or on mobile devices (i.e. behind a carrier-grade NAT).\n\nFortunately, WebRTC was built exactly for this use case, and provides hole-punching capabilites using the ICE protocol. The browser's WebRTC stack will handle this for us, as long as we manage to exchange the SDP in the first place. We use a special WebRTC coordination protocol run over relayed connections to do that.\n\nIn order to establish a relayed connection, we first need to connect to a relay node. Since the relay server will be a public node, we can use WebSocket, WebTransport or WebRTC for that purpose.\n"
        language: javascript
      - cardType: basic
        headline: Securing the WebRTC Connection
        text: >
          As WebRTC is built to facilitate video conferencing between browsers,
          browsers accept self-signed certificates by default. However, they
          don’t provide any way to encode any additional information (like the
          libp2p peer identity) into the certificate, thus libp2p nodes need to
          run a second handshake on top of a WebRTC stream, similar to
          WebTransport.
        language: javascript
      - cardType: basic
        headline: Counting Roundtrips
        text: >
          For the browser to public node use case:


          1.  Establishing the WebRTC connection: 1 RTT, plus the time STUN
          takes

          2.  libp2p handshake: 1 RTT


          For the browser to browser use case:


          1.  Establishing a connection to the relay: 2 - 3 RTTs (when using
          WebTransport or WebRTC), 6 RTTs (when using WebSocket)

          2.  Establishing a connection to the remote node via the relay: 1 RTT

          3.  Establishing the WebRTC connection: 1 RTT, plus the time STUN
          takes

          4.  libp2p handshake: 1 RTT
        language: javascript
    navigationLabel: WebRTC
    _template: sidebarCards
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
      buttonType: secondary
    background:
      fillStyles: bg-black
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        text: |
          go-libp2p: working on the implementation

          rust-libp2p: working on the implementation

          js-libp2p: working on the implementation
      - cardType: pullquote
        headline: Get involved
        text: >
          *  
          &#x20;[https://github.com/libp2p/specs/pull/412](https://github.com/libp2p/specs/pull/412)

          *   Go implementation

          *   Rust implementation
        link: ''
        buttonLabel: ''
    navigationLabel: ''
    _template: textCards
meta:
  pageTitle: libp2p Connectivity
  pageDescription: ''
---

