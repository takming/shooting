  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-timer/jquery.timer.js at master · jchavannes/jquery-timer · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="5o6/4CiGrvsqksouuVz0KQvsHm24G4RgJhLtslkT1RM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-00ea20e79e6d5abb55ae9c24c43af8b5ccb020e4.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-df74bbf87bba9dccfc9520b0f73402fbb8412896.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-bc374985e8441015fc645eca5b08988b6eadc695.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="b51bad6141221f7c86544ff749282b4b">

        <link data-pjax-transient rel='permalink' href='/jchavannes/jquery-timer/blob/06c9453653b7ad1120aa1bb46d1d8c2b71023537/jquery.timer.js'>
    <meta property="og:title" content="jquery-timer"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jchavannes/jquery-timer"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c5b57a2e31a8167f66f1a2fa64a01c26?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-timer - Basically setTimeout with more options."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jchavannes/jquery-timer"/>

    <meta name="description" content="jquery-timer - Basically setTimeout with more options." />

  <link href="https://github.com/jchavannes/jquery-timer/commits/master.atom" rel="alternate" title="Recent Commits to jquery-timer:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

      <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
        <a class="button primary" href="https://github.com/signup">Sign up for free</a>
      <a class="button" href="https://github.com/login?return_to=%2Fjchavannes%2Fjquery-timer%2Fblob%2Fmaster%2Fjquery.timer.js">Sign in</a>
    </div>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li class="search"><a href="https://github.com/search">Search</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjchavannes%2Fjquery-timer"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jchavannes/jquery-timer/stargazers">
        19
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjchavannes%2Fjquery-timer"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/jchavannes/jquery-timer/network" class="social-count">
        5
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jchavannes" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jchavannes</span>
                  </a></span> /
                <strong><a href="/jchavannes/jquery-timer" class="js-current-repository">jquery-timer</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jchavannes/jquery-timer/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jchavannes/jquery-timer/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/jchavannes/jquery-timer" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jchavannes/jquery-timer">Code</a></li>
    <li><a href="/jchavannes/jquery-timer/network" class="js-selected-navigation-item " data-selected-links="repo_network /jchavannes/jquery-timer/network">Network</a></li>
    <li><a href="/jchavannes/jquery-timer/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jchavannes/jquery-timer/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/jchavannes/jquery-timer/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jchavannes/jquery-timer/issues">Issues <span class='counter'>0</span></a></li>



    <li><a href="/jchavannes/jquery-timer/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jchavannes/jquery-timer/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jchavannes/jquery-timer/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jchavannes/jquery-timer/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/jchavannes/jquery-timer/blob/master/jquery.timer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jchavannes/jquery-timer" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jchavannes/jquery-timer">Files</a></li>
    <li><a href="/jchavannes/jquery-timer/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jchavannes/jquery-timer/commits/master">Commits</a></li>
    <li><a href="/jchavannes/jquery-timer/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jchavannes/jquery-timer/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f8c7b107085f7e632b1af669603df1b9 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f8c7b107085f7e632b1af669603df1b9 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jchavannes/jquery-timer" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-timer</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.timer.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.timer.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/jchavannes/jquery-timer/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/1e8e7c3aecbde677fdb39e2f477b7931?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">jason.chavannes@gmail.com</span></span>
    <time class="js-relative-date" datetime="2012-05-23T23:59:53-07:00" title="2012-05-23 23:59:53">May 23, 2012</time>
    <div class="commit-title">
        <a href="/jchavannes/jquery-timer/commit/b43a3cebf890ad56c22975c1bf3b354fbde432b9" class="message">Changed .active to .isActive (some users were having namespace issues)</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jchavannes/jquery-timer/blob/06c9453653b7ad1120aa1bb46d1d8c2b71023537/jquery.timer.js" data-title="jquery-timer/jquery.timer.js at master · jchavannes/jquery-timer · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>111 lines (109 sloc)</span>
                <span>3.484 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jchavannes/jquery-timer/raw/master/jquery.timer.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jchavannes/jquery-timer/blame/master/jquery.timer.js" class="button minibutton ">Blame</a>
                  <a href="/jchavannes/jquery-timer/commits/master/jquery.timer.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-blob">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * jquery.timer.js</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Copyright (c) 2011 Jason Chavannes &lt;jason.chavannes@gmail.com&gt;</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * http://jchavannes.com/jquery-timer</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * Permission is hereby granted, free of charge, to any person</span></div><div class='line' id='LC9'><span class="cm"> * obtaining a copy of this software and associated documentation</span></div><div class='line' id='LC10'><span class="cm"> * files (the &quot;Software&quot;), to deal in the Software without</span></div><div class='line' id='LC11'><span class="cm"> * restriction, including without limitation the rights to use, copy,</span></div><div class='line' id='LC12'><span class="cm"> * modify, merge, publish, distribute, sublicense, and/or sell copies</span></div><div class='line' id='LC13'><span class="cm"> * of the Software, and to permit persons to whom the Software is</span></div><div class='line' id='LC14'><span class="cm"> * furnished to do so, subject to the following conditions:</span></div><div class='line' id='LC15'><span class="cm"> *</span></div><div class='line' id='LC16'><span class="cm"> * The above copyright notice and this permission notice shall be</span></div><div class='line' id='LC17'><span class="cm"> * included in all copies or substantial portions of the Software.</span></div><div class='line' id='LC18'><span class="cm"> *</span></div><div class='line' id='LC19'><span class="cm"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,</span></div><div class='line' id='LC20'><span class="cm"> * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></div><div class='line' id='LC21'><span class="cm"> * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></div><div class='line' id='LC22'><span class="cm"> * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS</span></div><div class='line' id='LC23'><span class="cm"> * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN</span></div><div class='line' id='LC24'><span class="cm"> * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN</span></div><div class='line' id='LC25'><span class="cm"> * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span></div><div class='line' id='LC26'><span class="cm"> * SOFTWARE.</span></div><div class='line' id='LC27'><span class="cm"> */</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>	<span class="nx">$</span><span class="p">.</span><span class="nx">timer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">autostart</span><span class="p">)</span> <span class="p">{</span>	</div><div class='line' id='LC31'>	 	<span class="k">this</span><span class="p">.</span><span class="nx">set</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">autostart</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>	 		<span class="k">this</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC33'>	 	 	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">func</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>		 	 	<span class="kd">var</span> <span class="nx">paramList</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;autostart&#39;</span><span class="p">,</span> <span class="s1">&#39;time&#39;</span><span class="p">];</span></div><div class='line' id='LC35'>	 	 	 	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">arg</span> <span class="k">in</span> <span class="nx">paramList</span><span class="p">)</span> <span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">func</span><span class="p">[</span><span class="nx">paramList</span><span class="p">[</span><span class="nx">arg</span><span class="p">]]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span><span class="nb">eval</span><span class="p">(</span><span class="nx">paramList</span><span class="p">[</span><span class="nx">arg</span><span class="p">]</span> <span class="o">+</span> <span class="s2">&quot; = func[paramList[arg]]&quot;</span><span class="p">);}};</span></div><div class='line' id='LC36'>&nbsp;	 			<span class="nx">func</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">action</span><span class="p">;</span></div><div class='line' id='LC37'>	 	 	<span class="p">}</span></div><div class='line' id='LC38'>	 	 	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">func</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">action</span> <span class="o">=</span> <span class="nx">func</span><span class="p">;}</span></div><div class='line' id='LC39'>		 	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">time</span><span class="p">))</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">intervalTime</span> <span class="o">=</span> <span class="nx">time</span><span class="p">;}</span></div><div class='line' id='LC40'>		 	<span class="k">if</span><span class="p">(</span><span class="nx">autostart</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>			 	<span class="k">this</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC42'>			 	<span class="k">this</span><span class="p">.</span><span class="nx">setTimer</span><span class="p">();</span></div><div class='line' id='LC43'>		 	<span class="p">}</span></div><div class='line' id='LC44'>		 	<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC45'>	 	<span class="p">};</span></div><div class='line' id='LC46'>	 	<span class="k">this</span><span class="p">.</span><span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">time</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>			<span class="kd">var</span> <span class="nx">timer</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC48'>	 	 	<span class="k">if</span><span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">time</span><span class="p">))</span> <span class="p">{</span><span class="nx">time</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;}</span></div><div class='line' id='LC49'>			<span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="nx">timer</span><span class="p">.</span><span class="nx">action</span><span class="p">();},</span> <span class="nx">time</span><span class="p">);</span></div><div class='line' id='LC50'>	 		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC51'>	 	<span class="p">};</span></div><div class='line' id='LC52'>		<span class="k">this</span><span class="p">.</span><span class="nx">play</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>				<span class="k">if</span><span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">setTimer</span><span class="p">();}</span></div><div class='line' id='LC55'>				<span class="k">else</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">setTimer</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">remaining</span><span class="p">);}</span></div><div class='line' id='LC56'>				<span class="k">this</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="p">}</span></div><div class='line' id='LC58'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC59'>		<span class="p">};</span></div><div class='line' id='LC60'>		<span class="k">this</span><span class="p">.</span><span class="nx">pause</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="k">this</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC63'>				<span class="k">this</span><span class="p">.</span><span class="nx">remaining</span> <span class="o">-=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">()</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">last</span><span class="p">;</span></div><div class='line' id='LC64'>				<span class="k">this</span><span class="p">.</span><span class="nx">clearTimer</span><span class="p">();</span></div><div class='line' id='LC65'>			<span class="p">}</span></div><div class='line' id='LC66'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC67'>		<span class="p">};</span></div><div class='line' id='LC68'>		<span class="k">this</span><span class="p">.</span><span class="nx">stop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC69'>			<span class="k">this</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC70'>			<span class="k">this</span><span class="p">.</span><span class="nx">remaining</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">intervalTime</span><span class="p">;</span></div><div class='line' id='LC71'>			<span class="k">this</span><span class="p">.</span><span class="nx">clearTimer</span><span class="p">();</span></div><div class='line' id='LC72'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC73'>		<span class="p">};</span></div><div class='line' id='LC74'>		<span class="k">this</span><span class="p">.</span><span class="nx">toggle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">pause</span><span class="p">();}</span></div><div class='line' id='LC76'>			<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">play</span><span class="p">(</span><span class="kc">true</span><span class="p">);}</span></div><div class='line' id='LC77'>			<span class="k">else</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">play</span><span class="p">();}</span></div><div class='line' id='LC78'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC79'>		<span class="p">};</span></div><div class='line' id='LC80'>		<span class="k">this</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC81'>			<span class="k">this</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC82'>			<span class="k">this</span><span class="p">.</span><span class="nx">play</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC83'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC84'>		<span class="p">};</span></div><div class='line' id='LC85'>		<span class="k">this</span><span class="p">.</span><span class="nx">clearTimer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC86'>			<span class="nb">window</span><span class="p">.</span><span class="nx">clearTimeout</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timeoutObject</span><span class="p">);</span></div><div class='line' id='LC87'>		<span class="p">};</span></div><div class='line' id='LC88'>	 	<span class="k">this</span><span class="p">.</span><span class="nx">setTimer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">time</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>			<span class="kd">var</span> <span class="nx">timer</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC90'>	 	 	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="k">this</span><span class="p">.</span><span class="nx">action</span> <span class="o">!=</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span><span class="p">;}</span></div><div class='line' id='LC91'>	 	 	<span class="k">if</span><span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">time</span><span class="p">))</span> <span class="p">{</span><span class="nx">time</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">intervalTime</span><span class="p">;}</span></div><div class='line' id='LC92'>		 	<span class="k">this</span><span class="p">.</span><span class="nx">remaining</span> <span class="o">=</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC93'>	 	 	<span class="k">this</span><span class="p">.</span><span class="nx">last</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC94'>			<span class="k">this</span><span class="p">.</span><span class="nx">clearTimer</span><span class="p">();</span></div><div class='line' id='LC95'>			<span class="k">this</span><span class="p">.</span><span class="nx">timeoutObject</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span><span class="nx">timer</span><span class="p">.</span><span class="nx">go</span><span class="p">();},</span> <span class="nx">time</span><span class="p">);</span></div><div class='line' id='LC96'>		<span class="p">};</span></div><div class='line' id='LC97'>	 	<span class="k">this</span><span class="p">.</span><span class="nx">go</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC98'>	 		<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>	 			<span class="k">this</span><span class="p">.</span><span class="nx">action</span><span class="p">();</span></div><div class='line' id='LC100'>	 			<span class="k">this</span><span class="p">.</span><span class="nx">setTimer</span><span class="p">();</span></div><div class='line' id='LC101'>	 		<span class="p">}</span></div><div class='line' id='LC102'>	 	<span class="p">};</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>	 	<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">init</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC105'>	 		<span class="k">return</span> <span class="k">new</span> <span class="nx">$</span><span class="p">.</span><span class="nx">timer</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">autostart</span><span class="p">);</span></div><div class='line' id='LC106'>	 	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC107'>			<span class="k">this</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">autostart</span><span class="p">);</span></div><div class='line' id='LC108'>	 		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC109'>	 	<span class="p">}</span></div><div class='line' id='LC110'>	<span class="p">};</span></div><div class='line' id='LC111'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648847" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04666s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jchavannes/jquery-timer/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04719' data-host='fe4'></span>
    
  </body>
</html>

