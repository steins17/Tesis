<template>
  <div class="container">
    <br />
    <vs-tabs color="black" alignment="fixed">
      <vs-tab label="Letras" @click="colorx = '#8B0000'">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <vs-row vs-justify="center">
              <vs-button type="gradient" icon="contactless" class="center"></vs-button>
            </vs-row>
            <br />
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h5>Mayúscula - Minúscula</h5>
                  </div>
                  <div slot="media">
                    <img :src="('imagenes/b.png')" />
                  </div>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>

              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h5>Mayúscula - Minúscula</h5>
                  </div>
                  <div slot="media">
                    <img :src="('imagenes/d.png')" />
                  </div>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 2</div>
            <vs-row vs-justify="center">
              <vs-button type="gradient" icon="contactless" class="center"></vs-button>
            </vs-row>
            <br />
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h5>Mayúscula - Minúscula</h5>
                  </div>
                  <div slot="media">
                    <img :src="('imagenes/p.png')" />
                  </div>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>

              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h5>Mayúscula - Minúscula</h5>
                  </div>
                  <div slot="media">
                    <img :src="('imagenes/q.png')" />
                  </div>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>

      <vs-tab label="Sílabas" @click="colorx = '#8B0000'"></vs-tab>

      <vs-tab label="Oraciones" @click="colorx = '#8B0000'">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Miperroladramucho</center>
                    </span>
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
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Borjatienepecas</center>
                    </span>
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
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Lavacatienecuernos</center>
                    </span>
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
            <div slot="header">Ejercicio 4</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Misombreroesdecopa</center>
                    </span>
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

<script>
export default {};
</script>