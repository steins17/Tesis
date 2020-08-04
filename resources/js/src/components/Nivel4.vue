<template>
  <div class="container">
    <br />
    <br />
    <vs-tabs alignment="fixed">
      <vs-tab
        :label="nivel.nombre"
        @click="colorx = '#8B0000'"
        v-for="(nivel, index1) in preguntas"
        :key="index1"
      >
        <vs-collapse v-for="(subnivel, index2) in nivel.subnivel" :key="index2">
          <vs-collapse-item icon-arrow="label">
            <div slot="header">{{subnivel.nombre}}</div>
            <vs-row vs-justify="center">
              <vs-col
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="6"
                v-for="(pregunta, index1) in subnivel.preguntas"
                :key="index1"
              >
                <vs-card actionable class="cardx">
                  <div slot="header">{{pregunta.nombre}}</div>
                  <template v-ifelse>
                    <div slot="media" v-if="pregunta.oraciones">
                      <center>{{pregunta.oraciones}}</center>
                    </div>
                    <vs-button
                      color="primary"
                      type="gradient"
                      icon="contactless"
                    ></vs-button>
                  </template>
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
export default {
  data() {
    return {
      preguntas: [
        {
          nombre: "nivel 1",
          descripcion: "oraciones",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              audio: null,
              preguntas: [
                {
                  nombre: "Repite en voz alta",
                  descripcion: "Repite en voz alta",
                  oraciones:
                    "Yo abrí la boca para que el odontólogo la revisara.",
                  tipo_campo: 1,
                },
              ],
            },
            {
              nombre: "subnivel 2",
              descripcion: "subnivel 2",
              audio: null,
              preguntas: [
                {
                  nombre: "Repite en voz alta",
                  descripcion: "Repite en voz alta",
                  oraciones: "Bárbara bendita, eres mujer entre las santas.",
                  tipo_campo: 1,
                },
              ],
            },
            {
              nombre: "subnivel 3",
              descripcion: "subnivel 3",
              audio: null,
              preguntas: [
                {
                  nombre: "Repite en voz alta",
                  descripcion: "Repite en voz alta",
                  oraciones: "La Barbacoa estaba deliciosa.",
                  tipo_campo: 1,
                },
              ],
            },
          ],
        },
        {
          nombre: "nivel 2",
          descripcion: "frases",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              audio: null,
              preguntas: [
                {
                  nombre: "Repite en voz alta",
                  descripcion: "Repite en voz alta",
                  oraciones:
                    "En la casa de la señora sofía, a la sombra de un peral me comí un pastel. Por la ventana apareció su sobrino, el de la cara redonda y le mandó un saludo para mi tia.",
                  tipo_campo: 1,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    llamarpreguntas() {
      axios
        .get("/api/llamarpreguntas")
        .then(({ data }) => {
          this.preguntas = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    //this.llamarpreguntas();
  },
};
</script>