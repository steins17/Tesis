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
            <div class="centerx icons-example">
              <vs-row vs-justify="center">
                <vs-button type="gradient" icon="contactless" class="center"></vs-button>
              </vs-row>
              <br />
              <vs-row vs-justify="center">
                <vs-col
                  type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
                  v-for="(pregunta, index1) in subnivel.preguntas"
                  :key="index1"
                >
                  <vs-card actionable class="cardx">
                    <template v-if="pregunta.tipo_campo == 1">
                    <div slot="media" v-if="pregunta.oraciones">
                      <br>
                     <center>
                       <vs-input
                        :success="true"
                        success-text="The text is valid"
                        placeholder="Put the text"
                      />
                       </center> 
                    </div>
                  </template>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
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
          descripcion: "letras",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
                  tipo_campo: 1,
                },
              ],
            },
            {
              nombre: "subnivel 4",
              descripcion: "subnivel 4",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
                  tipo_campo: 1,
                },
              ],
            },
          ],
        },
        {
          nombre: "nivel 2",
          descripcion: "silabas",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
                  tipo_campo: 1,
                },
              ],
            },
            {
              nombre: "subnivel 4",
              descripcion: "subnivel 4",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
                  tipo_campo: 1,
                },
              ],
            },
          ],
        },
        {
          nombre: "nivel 3",
          descripcion: "oraciones",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
                  tipo_campo: 1,
                },
              ],
            },
            {
              nombre: "subnivel 4",
              descripcion: "subnivel 4",
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "aaa",
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