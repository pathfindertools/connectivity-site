---
draft: true
blocks:
  - style:
      alignment: 'flex-row-reverse text-left items-center items-start-vertical '
      featureContent: 'w-1/2 min-h-0 '
      padding: 'pt-52 pb-20 pr-10 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      featureImage: 'object-center object-scale-down '
      imagePadding: 'pt-52 pb-20 pr-20 pl-10 sm:pt-10 sm:pb-0 sm:pr-10 sm:pl-10'
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-4xl mb-5 font-bold
      subheadStyles: text-black font-1 text-xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-8 '
      contentOrder: labelHeadingsContent
    image:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1657648092/libp2p/libp2p-hero_hath9f.svg
    label: ''
    headline: libp2p Connectivity
    subhead: >-
      Depending on their positions in the network, nodes use different transport
      protocols to connect to other nodes.
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
      padding: 'pt-20 pb-10 pr-20 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-3xl mb-7 font-bold
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-2 text-lg mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Standalone Node ⇄ Standalone Node
    subhead: ''
    body: >
      Standalone nodes are libp2p nodes that run directly on their host machine,
      without being constrained by for example a browser environment. Examples
      are applications using go-libp2p, rust-libp2p or node.js-libp2p.


      If a node is any node running in a data centers, or on a dedicated
      connection, without any router / NAT / firewall in between, we call it a
      "public node". Public nodes use TCP and QUIC to connect to each other.
    navigationLabel: Standalone to Standalone
    _template: banner
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: accent1
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: 'text-black font-1 text-3xl mb-5 '
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347575/libp2p/tpc_kku6wb.svg
    headline: ''
    subhead: TCP
    body: >
      TCP was delevoped in the 1970s, and carried, up to the introduction of
      QUIC (see next section), the vast majority of traffic on the internet. It
      was also the first transport that was adopted in libp2p.
    cards:
      - cardType: basic
        headline: TCP in libp2p
        text: >
          Establishing a libp2p connection on top of TCP takes a few steps,
          upgrading the underlying connection:


          1.  Dial a TCP connection to the remote node and perform the
          3-way-handshake

          2.  Negotiate a security protocol (Noise or TLS 1.3), and then perform
          the chosen cryptographic handshake. The connection is now encrypted
          and the peers have verified each others' peer IDs.

          3.  Apply a stream multiplexer (yamux or mplex).


          Setting up a the libp2p takes quite a few network roundtrips, but is
          the most reliable option, as very few networks block TCP connections.
        language: javascript
        code: ''
      - cardType: basic
        headline: Counting Round Trips
        text: >
          1.  TCP Handshake (1 RTT)

          2.  Multistream Negotiation of the Security Protocol (1 RTT)

          3.  Security Handshake: TLS 1.3 or Noise (1 RTT)

          4.  Multistream Negotiation of the Stream&#x20;
              Multiplexer (1 RTT)

          Establishing and "upgrading" (applying encryption and a stream
          multiplexer) takes a whopping 4 round trips.


          And this is the most optimistic assumption. In case the peer doesn’t
          support the protocol suggested in a Multistream Negotiation step,
          Multistream will incur additional round trips.
        language: javascript
    navigationLabel: tcp
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pr-20 pb-20 pl-20
      contentWidth: w-full
      columns: '3'
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-5xl mb-0
      subheadStyles: text-black font-1 text-3xl mb-0
      textStyles: text-black font-1 text-md mb-0
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray
      padding: pt-4 pr-4 pb-4 pl-4
      borderStyles: border-gray
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-2xl mb-0
      subheadStyles: text-black font-1 text-md mb-0
      textStyles: text-black font-1 text-sm mb-0
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        subhead: ''
        text: |
          go-libp2p: ✔

          rust-libp2p: ✔

          node.js-libp2p: ✔

          Chrome: ❌ (not possible)

          Firefox: ❌ (not possbile)

          Safari: ❌ (not possible)
        language: javascript
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: accent2
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: 'text-black font-1 text-3xl mb-5 '
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347570/libp2p/quic_yhwi6l.svg
    headline: ''
    subhead: QUIC
    body: >
      [QUIC](https://datatracker.ietf.org/doc/html/rfc9000) is a new UDP-based
      transport protocol. QUIC connections are always encrypted (using TLS 1.3)
      and provides native stream multiplexing.


      Whenever possible, QUIC should be preferred over TCP. Not only is it
      faster, it also increases the chances of a successful holepunch in case of
      firewalls (see next section).


      However: UDP is blocked in ~5-10% of networks, especially in corporate
      networks, so running a node exclusively with QUIC is usually not an
      option.
    cards:
      - cardType: basic
        headline: QUIC in libp2p
        text: >
          Since QUIC provides encryption and stream multiplexing at the
          transport layer, no "upgrading" is required: As soon as the QUIC
          handshake finishes, we can use the QUIC connection as a libp2p
          connection.


          To verify the remote’s peer ID, it is [added to the TLS
          certificate](https://github.com/libp2p/specs/blob/master/tls/tls.md)
          (including a signature using the host’s key) which is used during the
          handshake. Once the handshake is complete, both sides have
          cryptographically verified each other’s identity.
        language: javascript
      - cardType: basic
        headline: Counting Round Trips
        text: >
          1.  QUIC handshake (1-RTT)


          That’s all there is. QUIC verifies the client’s address (that’s what
          TCP’s 3-way handshake is there for) and performs the TLS 1.3 handshake
          in parallel. And since QUIC comes with transport-level stream
          multiplexing, we don’t need to set up a separate stream multiplexer.


          For resumed connections, QUIC even supports a 0-RTT handshake,
          although we’re currently not (yet) making use of that in libp2p.
        language: javascript
    navigationLabel: quic
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pr-20 pb-20 pl-20
      contentWidth: w-full
      columns: '3'
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-5xl mb-0
      subheadStyles: text-black font-1 text-3xl mb-0
      textStyles: text-black font-1 text-md mb-0
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray
      padding: pt-4 pr-4 pb-4 pl-4
      borderStyles: border-gray
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-2xl mb-0
      subheadStyles: text-black font-1 text-md mb-0
      textStyles: text-black font-1 text-sm mb-0
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        subhead: ''
        text: |
          go-libp2p: ✔

          rust-libp2p: ⏱ (work in progress)

          node.js-libp2p: ❌

          Chrome: ❌ (not possible)

          Firefox: ❌ (not possible)

          Safari: ❌ (not possible)
        language: javascript
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: accent3
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: 'text-black font-1 text-3xl mb-5 '
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347566/libp2p/hole-punching_gbdmww.svg
    headline: ''
    subhead: Hole Punching
    body: >
      Not all nodes are located in a publicly reachable position. Nodes in home
      and in corporate networks are usually separated from the public internet
      by a NAT or a firewalls. Mobile phones are usually behind a so-called
      carrier-grade NAT.


      Nodes behind firewalls / NATs can dial any node on the public internet,
      but they cannot receive incoming connections from outside their local
      network.
    cards:
      - cardType: basic
        headline: libp2p Relays
        text: >
          When a libp2p node boots up, one of the first things it does is to
          start [AutoNAT](https://github.com/libp2p/specs/tree/master/autonat)
          to determine its position in the network: is it a public node,
          reachable from the public internet, or is it a private node, located
          behind a firewall or a NAT?


          *   A private node will start looking for relay servers on the
          network, and obtain a reservation with (at least) one of them. This
          entails keeping a connection open to that relay. The relay will now
          forward traffic from other nodes.

          *   A public node will become a relay server, offering relay services
          to private nodes on the network. The relay service is designed such
          that it’s very cheap to run (in terms of CPU, memory and bandwith).
          This is achieved by limiting the number of reservations, the
          connection time for relayed connections as well as their bandwidth.
        language: javascript
      - cardType: basic
        headline: Obtaining a Direct Connection
        text: >
          Obtaining a reservation with a relay is only half the story. After
          all, relayed connections are limited both in terms of time and
          bandwidth. Nodes use relayed connections to coordinate the
          establishment of a direct connection.


          We need to distinguish two situations here:


          *   The node trying to connect is a public node: This is the easier
          scenario. When the node behind the NAT accepts the relayed connection,
          it notices that the peer has a public IP address. It then dials a
          direct connection to that node.

          *   The other node is also behind a NAT: Simply dialing the peer won't
          work. It’s necessary to employ a technique called “hole punching”. By
          carefully timing simultaneous connection attempts from both sides the
          NATs on both sides are tricked into thinking that they’re both
          handling with outgoing connections.


          Setting up the direct connection requires quite some effort, but it’s
          worth it: direct connections have a lower possible, and can use the
          full bandwidth of the link.
        language: javascript
    navigationLabel: hole-punching
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pr-20 pb-20 pl-20
      contentWidth: w-full
      columns: '3'
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-5xl mb-0
      subheadStyles: text-black font-1 text-3xl mb-0
      textStyles: text-black font-1 text-md mb-0
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray
      padding: pt-4 pr-4 pb-4 pl-4
      borderStyles: border-gray
      labelStyles: text-black font-1 text-sm mb-0
      headlineStyles: text-black font-1 text-2xl mb-0
      subheadStyles: text-black font-1 text-md mb-0
      textStyles: text-black font-1 text-sm mb-0
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - cardType: pullquote
        headline: Support
        subhead: ''
        text: |
          go-libp2p: ✔

          rust-libp2p: ✔

          node.js-libp2p: ✔
        language: javascript
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-20 pb-20 pr-20 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-black font-1 text-base mb-0 '
      headlineStyles: text-black font-1 text-3xl mb-7 font-bold
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-black font-2 text-lg mb-14 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-black font-1 undefined mb-0 '
      textStyles: 'text-black font-2 text-base mb-0 '
      buttonType: primary
    label: ''
    headline: Browser → Standalone Node
    subhead: ''
    body: >
      Browsers mostly use HTTP(S), making use of an underlying TCP connection
      for HTTP/1.1 and HTTP/2, or a QUIC connection for HTTP/3. To keep their
      users secure, they enforce strict rules, like certificate requirements and
      blocking of cross-origin policies. For security reasons, it's not possible
      to dial a raw TCP or QUIC connection from within the browser.


      Traditionally, WebSocket could be used to gain access to the underlying to
      the underlying TCP connection, after a so-called WebSocket Upgrade.
      Similarly, WebTransport aims to allow access to the underlying QUIC
      connection for HTTP/3.
    items:
      - cardType: pullquote
        headline: Streams vs. Request-Response
        subhead: ''
        text: >
          HTTP is a request-response scheme. The client (browser) sends a
          request, and then waits for a response.


          libp2p on the other hand is built on top of a stream abstraction. A
          stream is more flexible than a request-response scheme: it allows
          continuous bidirectional communication, both parties can send and
          receive data at any time.
        language: javascript
    navigationLabel: Browser to Standalone
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: primary
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: text-black font-1 text-3xl mb-5 font-bold
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347583/libp2p/websocket_pbu8af.svg
    headline: WebSocket
    body: >
      [WebSocket](https://www.rfc-editor.org/rfc/rfc6455) allows “hijacking” of
      a HTTP/1.1 connection. Later on, it was later also [standardized for
      HTTP/2](https://www.rfc-editor.org/rfc/rfc8441).


      After an HTTP-based "Upgrade request", the browser gains access to the
      underlying TCP connection.
    cards:
      - cardType: basic
        headline: WebSocket Upgrade
        text: >
          The browser first establishes the TCP connection and sends an HTTP
          request:&#x20;


          GET /chat HTTP/1.1


          Host: server.example.com


          Upgrade: websocket


          Connection: Upgrade


          The server can accept this upgrade request by sending a HTTP 200
          response. All bytes sent on the TCP connection after this are now not
          considered part of the HTTP response anymore, but part of the
          WebSocket connection.
        language: javascript
        code: ''
      - cardType: basic
        headline: WebSocket in libp2p
        text: >
          1.  TCP handshake (1 RTT)

          2.  WebSocket Upgrade Request (1 RTT).

          3.  Multistream security protocol negotiation (1 RTT)

          4.  Security Handshake (Noise or TLS, 1 RTT)

          5.  Multistream stream multiplexer negotiation (1 RTT)


          5 round trips is quite a long time for setting up a connection.


          Unfortunately, this is not even the whole story. In recent years, the
          web has moved towards ubiquitous encryption, and browsers have started
          enforcing that web content is loaded via encrypted connection.
          Specifically, when on a website loaded via HTTPS, browsers will block
          plaintext WebSocket connections, and require a WebSocket Secure (wss)
          connection.


          A WebSocket Secure connection uses HTTPS to perform the Upgrade
          request. That means that in addition to the 5 round trips listed
          above, there’ll be another roundtrip for the TLS handshake, increasing
          the handshake latency to 6 RTTs.
        language: javascript
      - cardType: basic
        headline: TLS Certificate Verification in the Browser
        text: "When establishing a connection to a web server, the client asks the server for a TLS certificate. Conceptually, the TLS certificate says “the domain\_[libp2p.io](http://libp2p.io/)\_belongs to the owner of this certificate”, together with a (cryptographic) signature.\n\nOf course, the browser can’t just trust any signature. If an attacker wanted to impersonate libp2p.io, she could just sign her own certificate. Browsers are shipped with a list of signatories, called Certificate Authorities (CA) that they trust.\n\nThis is a problem for libp2p. Most nodes on the network don’t even have a domain name, let alone a certificate signed by a CA. Only a handful of nodes fulfil these properties, making WebSocket a niche transport in the libp2p ecosytem.\n"
        language: javascript
      - cardType: basic
        headline: ACME to the rescue?
        text: >
          ACME is a protocol which allows a server to obtain a certificate from
          a CA without any manual involvement. There've been
          [proposals](https://github.com/libp2p/go-libp2p/issues/1360
          "proposals") to use ACME to issue a [Let's
          Encrypt](https://letsencrypt.org/) certificate for every libp2p node.


          To be able to issue the certificate, the CA needs to verify that the
          server actually controls the domain. There are 2 ways:


          1.  HTTP / TLS challenge: The CA instructs the server to publish a
          random value on the website. It then issues a request to check the
          value. By being able to publish this value, the server has proven to
          control the domain.

          2.  DNS challenge: The CA instructs the server to publish the random
          value in a DNS TXT record. The server thereby proves that it can
          modify the DNS records for that domain.&#x20;


          There are a couple of problems with this approach:


          *   libp2p nodes would still need to possess a domain name.

          *   Using the HTTP / TLS challenge requires the node to start a
          webserver on port 80 or 443. This might not be possible if the node is
          running a webserver at the same time.

          *   The DNS challenge requires (programmatic) access to the DNS
          records for the domain, which requires special configuration.
        language: javascript
    navigationLabel: websocket
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-black font-1 text-base mb-0 '
      headlineStyles: 'text-black font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-black font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-black font-1 undefined mb-0 '
      textStyles: 'text-gray-dark font-2 text-base mb-0 '
      buttonType: primary
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
        language: javascript
      - cardType: pullquote
        headline: Get involved!
        text: >
          There are solutions to assign certificates to a fleet of nodes, see
          for example
          [https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/](https://words.filippo.io/how-plex-is-doing-https-for-all-its-users/).


          Another option would be using IP certificates. They’re quite rare, and
          not a lot of CAs support generating them, but this might be worth
          investigating.
        language: javascript
    navigationLabel: ''
    _template: textCards
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: accent1
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: text-black font-1 text-3xl mb-5 font-bold
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347588/libp2p/webtransport_ko6iua.svg
    headline: WebTransport
    body: >
      While WebSocket allows the browser to “hijack” a TCP connection,
      WebTransport does the same thing with a QUIC connection.


      The protocol is brand-new, in fact, there’s not even an RFC yet: It’s
      still under development by the [IETF WebTransport Working
      Group](https://datatracker.ietf.org/wg/webtrans/about/) and the [W3C
      WebTransport Working Group](https://www.w3.org/groups/wg/webtransport).


      WebTransport is interesting for libp2p, because in contrast with
      WebSocket, there's a way around the strict certificate requirements,
      allowing the use in a p2p setting.
    cards:
      - cardType: basic
        headline: WebTransport Upgrade
        text: >
          The browser first establishes a HTTP/3 connection to the server. It
          then opens a new stream, and sends an Extended CONNECT request, and
          proposed a WebTransport Session ID.


          HEADERS


          *   method: CONNECT

          *   protocol: webtransport

          *   scheme: https

          *   authority: https://chat.example.com

          *   path: /chat

          *   Origin: mywebsite.com


          The server can accept the upgrade by sending a HTTP 200 OK response.
          Both endpoints can now open QUIC streams associated with this
          WebTransport session.
        language: javascript
      - cardType: basic
        headline: Certificate Hashes
        subhead: ''
        text: >
          In WebTransport, the browser has two ways to verify the TLS
          certificate:


          1.  Checking if the certificate is signed by a certificate authority
          (CA). The requirements are analogous to WebSocket Secure.

          2.  Checking that the SHA-256 [hash of the
          certificate](https://www.w3.org/TR/webtransport/#certificate-hashes)
          matches a pre-determined value.


          The first options comes with the same problems that we encountered for
          WebSocket: libp2p nodes usually neither have a domain name, nor do
          they have an easy way to obtain a certificate from a CA.


          [libp2p makes use](https://github.com/libp2p/specs/pull/404) of the
          second option. We can encode the certificate hash into the
          multiaddress of a node, for example:
          */ip4**/1.2.3.4**/udp**/4001**/quic**/webtransport**/certhash**/\<hash>*.
          The browser now knows the hash, and can establish a (secure!)
          connection.
        language: javascript
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
    navigationLabel: webtransport
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-black font-1 text-base mb-0 '
      headlineStyles: 'text-black font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-black font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-black font-1 undefined mb-0 '
      textStyles: 'text-black font-2 text-base mb-0 '
      buttonType: primary
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
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-20 pb-10 pr-20 pl-20 sm:pt-10 sm:pb-10 sm:pr-10 sm:pl-10'
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-1 text-3xl mb-7 font-bold
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-2 text-lg mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Browser ⇄ Browser
    subhead: ''
    body: |
      Some content here?
    navigationLabel: Browser to Browser
    _template: banner
  - cardStyle:
      padding: undefined undefined undefined undefined
      borderStyles: border-white undefined-0
      labelStyles: 'text-black font-1 text-sm undefined '
      headlineStyles: text-black font-1 text-xl mb-8 font-bold
      subheadStyles: 'text-black font-1 text-base undefined '
      textStyles: 'text-black font-2 text-base mb-5 '
      buttonType: primary
    style:
      navColor: accent2
      labelStyles: 'text-black undefined undefined undefined '
      headlineStyles: 'text-black font-1 text-3xl mb-5 '
      subheadStyles: text-black font-1 text-3xl mb-5 font-bold
      textStyles: 'text-black font-2 text-lg mb-14 '
    imageSrc: >-
      https://res.cloudinary.com/protocolai/image/upload/v1663347579/libp2p/webrtc_agqcgn.svg
    headline: ''
    subhead: WebRTC
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
    navigationLabel: webrtc
    _template: sidebarCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-0 pb-20 pr-20 pl-20 sm:pt-0 sm:pb-10 sm:pr-10 sm:pl-10'
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-black font-1 text-base mb-0 '
      headlineStyles: 'text-black font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-black font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-lg mb-3 font-bold
      subheadStyles: 'text-black font-1 undefined mb-0 '
      textStyles: 'text-black font-2 text-base mb-0 '
      buttonType: secondary
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

