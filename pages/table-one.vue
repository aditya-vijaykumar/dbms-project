<template>
  <div>
    <v-row class="mt-15 mb-15">
      <!-- CRUD -->
      <v-col cols="6" offset="3">
        <v-card flat>
          <v-card-text>
            <h3 class="text-center display-1 mb-5 mt-5">
              Employee Table Entries
            </h3>

            <v-row>
              <v-col cols="3" offset="7">
                <v-btn outlined color="blue" @click="refreshButton">
                  <v-icon>mdi-reload</v-icon> &nbsp; Refresh
                </v-btn>
              </v-col>
              <v-col cols="2"
                ><v-dialog v-model="dialog" max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="green darken-4"
                      @click="resetAllFields"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-plus</v-icon> &nbsp;New
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-form ref="form" v-model="valid">
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model.trim="editedItem.Fname"
                                label="First Name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model.trim="editedItem.Lname"
                                label="Last Name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model.number="editedItem.ssn"
                                label="SSN"
                                type="number"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-menu
                                v-model="menuDate"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="editedItem.bdate"
                                    label="Birthdate"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :rules="dateRules"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="editedItem.bdate"
                                  @input="menuDate = false"
                                  :max="maxDate"
                                ></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-radio-group v-model="editedItem.sex">
                                <template v-slot:label>
                                  <div>Gender</div>
                                </template>
                                <v-radio label="Male" value="M"></v-radio>
                                <v-radio label="Female" value="F"></v-radio>
                                <v-radio label="Non-Binary" value="O"></v-radio>
                              </v-radio-group>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model.number="editedItem.salary"
                                label="Salary"
                                type="number"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog></v-col
              >
            </v-row>
            <v-alert
              border="left"
              color="indigo"
              dark
              dense
              dismissible
              v-model="alert"
              class="mt-3"
            >
              <h6 class="text-body-2">
                Sometimes changes may not instantly reflect, please press
                refresh button once before repeatedly triggering other events.
              </h6>
            </v-alert>
            <div class="elevation-3"></div>
            <v-data-table :headers="headers" :items="data" class="elevation-1">
              <template v-slot:top>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this item?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="setTheData"> Reset </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as axios from 'axios'
export default {
  // middleware: 'admin',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    valid: false,
    alert: true,
    headers: [
      {
        text: 'First Name',
        align: 'start',
        value: 'Fname',
      },
      { text: 'Last Name', value: 'Lname' },
      { text: 'SSN', value: 'ssn' },
      { text: 'Birthdate', value: 'bdate' },
      { text: 'Gender', value: 'sex' },
      { text: 'Salary', value: 'salary' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    dataFetched: [],
    data: [],
    menuDate: false,
    maxDate: '',
    dateRules: [(v) => (v && v.length == 10) || !v || 'Invalid Date'],
    ssnRules: [
      (v) => !!v || 'This field is required',
      (v) => (v && v != 0) || 'SSN cannot be 0',
      (v) => (v && v <= 100000) || 'SSN cannot exceed 100000',
    ],
    editDialog: false,
    editedUID: -1,
    deleteUID: -1,
    editedItem: {
      Fname: '',
      Lname: '',
      ssn: 0,
      bdate: '',
      sex: '',
      salary: 0,
      uid: 0,
    },
    nodeDbTable: 'http://localhost:5000/app/employee/',
  }),
  computed: {
    formTitle() {
      return !this.editDialog ? 'New Entry' : 'Edit Entry'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    setTheData() {
      this.data = []
      this.dataFetched.forEach((ent) => {
        let birthdateobject = new Date(Date.parse(ent.bdate))
        this.data.push({
          Fname: ent.Fname,
          Lname: ent.Lname,
          ssn: ent.ssn,
          bdate: birthdateobject.toISOString().slice(0, 10),
          sex: ent.sex,
          salary: ent.salary,
          uid: ent.uid,
        })
      })
    },
    editItem(item) {
      console.log(item)
      this.editedUID = item.uid
      this.editedItem.Fname = item.Fname
      this.editedItem.Lname = item.Lname
      this.editedItem.ssn = item.ssn
      this.editedItem.bdate = item.bdate
      this.editedItem.sex = item.sex
      this.editedItem.salary = item.salary
      this.editDialog = true
      this.dialog = true
    },
    save() {
      if (this.editDialog) {
        console.log('Edited an entry')
        this.updateDateEntry()
      } else {
        console.log('Made a new entry')
        this.newDateEntry()
      }
      this.close()
    },
    close() {
      this.dialog = false
      this.editDialog = false
      this.resetAllFields()
      this.$nextTick(() => {
        this.editedUID = -1
      })
    },
    resetAllFields() {
      this.editedItem = Object.assign(this.editedItem, {
        Fname: '',
        Lname: '',
        ssn: 0,
        bdate: '',
        sex: '',
        salary: 0,
        uid: 0,
      })
    },
    async updateDateEntry() {
      if (this.$refs.form.validate()) {
        const params = {
          Fname: this.editedItem.Fname,
          Lname: this.editedItem.Lname,
          ssn: this.editedItem.ssn,
          bdate: this.editedItem.bdate,
          sex: this.editedItem.sex,
          salary: parseInt(this.editedItem.salary),
        }
        try {
          console.log(this.editedUID)
          let retStatus = await axios.post(
            this.nodeDbTable + 'update/' + this.editedUID,
            params
          )
          if (retStatus.status == 200) {
            this.$notifier.showMessage({
              content: 'Successfully updated data!',
              color: 'green',
            })
          } else {
            this.$notifier.showMessage({
              content: 'Some Error Occured, check the data again',
              color: 'error',
            })
          }
        } catch (error) {
          this.$notifier.showMessage({
            content: 'Some Error occured while connecting to the DB',
            color: 'error',
          })
        }
        this.close()
      }
      this.refresh()
    },
    async newDateEntry() {
      if (this.$refs.form.validate()) {
        const params = {
          Fname: this.editedItem.Fname,
          Lname: this.editedItem.Lname,
          ssn: this.editedItem.ssn,
          bdate: this.editedItem.bdate,
          sex: this.editedItem.sex,
          salary: parseInt(this.editedItem.salary),
        }
        try {
          let retStatus = await axios.post(this.nodeDbTable + 'insert', params)
          if (retStatus.status == 201) {
            this.$notifier.showMessage({
              content: 'Successfully inserted data!',
              color: 'green',
            })
          } else {
            this.$notifier.showMessage({
              content: 'Some Error Occured, check the data again',
              color: 'error',
            })
          }
        } catch (error) {
          this.$notifier.showMessage({
            content: 'Some Error occured while connecting to the DB',
            color: 'error',
          })
        }
        this.close()
      }
      this.refresh()
    },

    deleteItem(item) {
      this.deleteUID = item.uid
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      try {
        console.log(this.deleteUID)
        let retStatus = await axios.post(
          this.nodeDbTable + 'delete/' + this.deleteUID
        )
        if (retStatus.status == 204) {
          this.$notifier.showMessage({
            content: 'Successfully deleted the entry!',
            color: 'green',
          })
        } else {
          this.$notifier.showMessage({
            content: 'Some Error Occured, check the data again',
            color: 'error',
          })
        }
      } catch (error) {
        this.$notifier.showMessage({
          content: 'Some Error occured while connecting to the DB',
          color: 'error',
        })
      }
      this.refresh()
      this.closeDelete()
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.deleteUID = -1
      })
    },
    async refreshButton() {
      if (await this.refresh()) {
        this.$notifier.showMessage({
          content: 'Database Entries have been refreshed',
          color: 'blue darken-3',
        })
      }
    },
    async refresh() {
      try {
        this.dataFetched = await axios.get(this.nodeDbTable + 'all')
        this.dataFetched = this.dataFetched.data.data
        this.setTheData()
        return true
      } catch (e) {
        this.$notifier.showMessage({
          content: 'Error connecting to DB',
          color: 'error',
        })
      }
    },
    showSnackbar(content, color) {
      this.$notifier.showMessage({ content, color })
    },
  },
  async mounted() {
    try {
      this.dataFetched = await axios.get(this.nodeDbTable + 'all')
      this.dataFetched = this.dataFetched.data.data
      console.log(this.dataFetched)
      this.setTheData()
    } catch (e) {
      console.error(e)
    }

    let d = new Date()
    d.setDate(d.getDate() + 1)
    this.maxDate = d.toISOString()
  },
}
</script>

<style>
</style>