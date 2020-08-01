<template>
  <div class="container">
    <br />
    <br />
    <vs-tabs alignment="fixed">
      <vs-tab label="ORACIONES">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Repite en voz alta</h3>
                  </div>
                  <div>
                    <span><center>Yo abrí la boca para que el odontólogo la revisara.</center></span>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient" icon="contactless"></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>


        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 2</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Repite en voz alta</h3>
                  </div>
                  <div>
                    <span><center>Bárbara bendita, eres mujer entre las santas.</center></span>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient" icon="contactless"></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 3</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Repite en voz alta</h3>
                  </div>
                  <div>
                    <span><center>La Barbacoa estaba deliciosa.</center></span>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient" icon="contactless"></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>


      </vs-tab>

      <vs-tab label="FRASES">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Repite en voz alta</h3>
                  </div>
                  <div>
                    <span>En la casa de la señora sofía, a la sombra de un peral me comí un pastel. Por la ventana apareció su sobrino, el de la cara redonda y le mandó un saludo para mi tia.</span>
                  </div>
                  <div slot="footer">
                    <vs-row vs-justify="flex-end">
                      <vs-button color="primary" type="gradient" icon="contactless"></vs-button>
                    </vs-row>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>

    </vs-tabs>
  </div>
</template>

 