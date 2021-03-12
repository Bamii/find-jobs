<template>    
  <Header/>
  <Hero title="Jobs." />

  <div class="container container-pad mx-auto mt-10">
    <Notification
      :notification="notification"
      :close="closeNotification"
    />
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-0 md:space-x-5">
      <div class="flex px-4 py-2 rounded-lg shadow-md space-x-4">
        <input placeholder="Frontend" type="text" class="flex-1 px-4 py-3">
        <input type="button" value="Search" class="btn btn-red">
      </div>
      <button @click="() => displayJobModal(null)" class="btn btn-red">
        + New Job
      </button>
    </div>
  </div>

  <div class="overflow-scroll container container-pad mx-auto mt-10 space-y-5">
    <table class="table-auto w-full">
      <thead>
        <tr class="rounded-lg bg-blue mb-10 text-white">
          <th class="py-2 font-light rounded-l-lg"></th>
          <th class="py-2 font-light text-center">Job Title</th>
          <th class="py-2 font-light text-center">Date Modified</th>
          <th class="py-2 font-light text-center">Candidates</th>
          <th class="py-2 font-light text-center"></th>
          <th class="py-2 font-light rounded-r-lg text-center"></th>
        </tr>
      </thead>

      <tbody class="space-x-5">
        <template v-for="(job, index) in jobs_list" :key="job.id">
          <tr class="space-y-10">
            <td class="py-2 px-5 rounded-l-lg flex justify-center items-center">
              <div class="h-3 w-3 bg-red-light rounded-full"></div>
            </td>
            <td class="py-2 px-5 text-center">{{ job.title }}</td>
            <td class="py-2 px-5 text-center">{{ processDate(job.updated_at) }}</td>
            <td class="py-2 px-5 text-center">-</td>
            <td class="py-2 px-5 text-center"><button @click="() => displayJobModal(index)" class="btn"> Edit </button> </td>
            <td class="py-2 px-5 rounded-r-lg text-center"><button @click="() => displayDeleteModal(index)" class="btn btn-red">Delete</button></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

  <Footer />
  <!-- overlay -->
  <div v-show="isJobModalVisible" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray opacity-75"></div>
      </div>

      <!-- gotten from tailwindui.com -->
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:pt-10 sm:p-8">
          <div class="text-lg text-blue font-bold">
            New Job
          </div>
          <div class="text-sm text-blue font-semibold">
            Please provide the required information to get matched with suitable candidates.
          </div>
          
          <div class="mt-8 space-y-8">
            <div class="">
              <CustomInput
                label="job_title"
                title="Job Title"
                v-model="job.title"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="company_name"
                title="Company Name"
                v-model="job.company"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="location"
                title="Location"
                v-model="job.location"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="salary"
                title="Salary"
                v-model="job.salary"
              />
            </div>
            
            <div class="">
              <CustomSelect
                label="type"
                title="What Type of Employment is it?"
                v-model="job.type"
                :options="['Fulltime', 'Temporary', 'Contract', 'Permanent', 'Internship', 'Volunteer']"
              />
            </div>
            
            <div class="">
              <CustomInput
                label="deadline"
                title="Submission Deadline"
                v-model="job.deadline"
              />
            </div>
            
            <div class="">
              <CustomSelect
                label="category"
                title="What Sector is the job categorized under?"
                v-model="job.category"
                :options="['Tech', 'HealthCare', 'Hospitality', 'Customer Service', 'Marketing']"
              />
            </div>
          </div>

          <div class="w-full flex space-x-5 mt-8">
            <button @click="closeModal" class="flex-1 py-4 btn btn-red">Cancel</button>
            <button @click="processJobEntry" class="flex-1 py-4 btn btn-blue">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isDeleteModalVisible" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray opacity-75"></div>
      </div>

      <!-- gotten from tailwindui.com -->
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:pt-10 sm:p-8">
          <div class="text-lg text-blue font-bold">
            Do you reall want to delete this entry?
          </div>
        
          <div class="w-full flex space-x-5 mt-8">
            <button @click="closeModal" class="flex-1 py-4 btn bg-white text-blue">Cancel</button>
            <button @click="deleteJobEntry" class="flex-1 py-4 btn btn-red">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Admin/Header.vue'
  import Footer from '@/components/Admin/Footer.vue'
  import Hero from '@/components/Hero.vue'
  import CustomInput from '@/components/CustomInput.vue'
  import CustomSelect from '@/components/CustomSelect.vue'
  import Notification from '@/components/Notification.vue'
  import { getUserToken } from '../utils'
  const {
    VUE_APP_ADMIN_JOBS_URL: ADMIN_JOBS_URL
  } = process.env
  const JOB_LIST = require('../sample_admin_job_list.json')

  export default { 
    name: "Admin",
    components: {
      Header, Hero,
      CustomInput, Footer,
      CustomSelect,
      Notification
    },
    data: function() {
      return {
        axiosInstance: null,
        job: {
          title: "",
          company: "",
          location: "",
          type: "",
          salary: "",
          deadline: "",
          category: ""
        },
        selected: 0,
        toBeDeleted: 0,
        jobs_list: [],
        hasSearched: false,
        isJobModalVisible: false,
        isDeleteModalVisible: false,
        notification: {
          show: false,
          success: true,
          message: "sdafadd"
        }
      }
    },
    mounted() {
      const token = getUserToken();
      this.axiosInstance = axios.create({
        baseUrl: ADMIN_JOBS_URL,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    },
    computed: {
      selectedJob: () => {
        return this.jobs_list[this.selected];
      }
    },
    methods: {
      processDate(date) {
        const d = new Date(date);
        return `${d.getMonth()} / ${d.getFullYear()}`
      },
      displayJobModal(index) {
        this.selected = index;

        if(index !== null) {
          const temp = {};
          const {
            title, company, location,
            type, salary, deadline, category
          } = this.jobs_list[index];
          temp.title = title
          temp.company = company
          temp.location = location
          temp.type = type
          temp.salary = salary
          temp.category = category
          
          this.job = temp;
        }

        this.toggleModal();
      },
      displayDeleteModal(index) {
        this.toBeDeleted = index;
        this.isDeleteModalVisible = true;
      },
      toggleModal() {
        this.isJobModalVisible = !this.isJobModalVisible
      },
      closeModal() {
        const temp = {
          title: "",
          company: "",
          location: "",
          type: "",
          salary: "",
          deadline: "",
          category: ""
        }
        this.job = temp;
        this.isJobModalVisible = false;
        this.isDeleteModalVisible = false;
      },
      displayNotification(success, message) {
        const n = {
          show: true,
          success,
          message
        }
        this.notification = n;
      },
      closeNotification() {
        const n = { show: false, success: false, message: "" }
        this.notification = n;
      },
      processJobEntry() {
        let req;
        
        if(this.selected === null) {
          req = axios.post(`/`, this.job)
        } else {
          req = axios.patch(`/${this.selectedJob.id}`, this.job)
        }

        req.then(({ data }) => {
          const success = data.status === 'success';
          if(success) {
            this.displayNotification(true, `Successfully ${this.selected === null ? 'created' : 'edited'} an entry.`)
          } else {
            this.displayNotification(false, "An Error Occured, please try again later.")
          }
        })
      },
      deleteJobEntry() {
        const tbd = this.jobs_list[this.toBeDeleted];

        this.axiosInstance
          .delete(`/${tbd.id}`)
          .then(({ data }) => {
            const success = data.status === 'success';
            if(success) {
              this.displayNotification(true, `Successfully deleted an entry.`)
            } else {
              this.displayNotification(false, "An Error Occured, please try again later.")
            }
          })
      }
    },
    mounted: function() {
      if(this.hasSearched) return;
      this.jobs_list = JOB_LIST
    }
  }
</script>