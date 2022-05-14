import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import { render } from "solid-js/web";
import Content from "./content";

import "../node_modules/astronot/css/astronot.min.css";

const App = () => {
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  return (
    <>
      <nav class="nav">
        <center><span class="link" classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
         👨‍🚀 Home
        </span> . 
       <span class="link" classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
         👨‍💻 Work
        </span> . 
        <span class="link" classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
          🚀 Run
        </span>
      </center></nav>
      <div class="carde tab" classList={{ pending: pending() }}>
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}>
              <Content page="Astronot" />
            </Match>
            <Match when={tab() === 1}>
              <Content page="Install" />
            </Match>
            <Match when={tab() === 2}>
              <Content page="Deploy" />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

render(App, document.getElementById("start"));
