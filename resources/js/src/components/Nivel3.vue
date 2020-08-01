<template>
  <div class="container">
    <br />
    <br />
    <vs-tabs alignment="fixed">
      <vs-tab label="LETRAS">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

       <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 2</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 3</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 4</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 5</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 6</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 7</div>
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
              </vs-row>
            </div>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>

      <vs-tab label="SÍLABAS">
        <div></div>
      </vs-tab>

      <vs-tab label="PALABRAS">
        <div></div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>